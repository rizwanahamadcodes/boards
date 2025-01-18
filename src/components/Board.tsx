import { AddColumn } from "@/components/AddColumn";
import { Column } from "@/components/Column";
import { useBoardData } from "@/context/BoardDataContext";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import clsx from "clsx";

type BoardProps = {
    className?: string;
};

export const Board = (props: BoardProps) => {
    const { className } = props;
    const { boardData, setBoardData } = useBoardData();

    const handleDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const sourceColumnIndex = boardData.findIndex(
            (column) => column.id === source.droppableId
        );
        const destinationColumnIndex = boardData.findIndex(
            (column) => column.id === destination.droppableId
        );

        const sourceColumn = boardData[sourceColumnIndex];
        const destinationColumn = boardData[destinationColumnIndex];

        const draggedCard = sourceColumn.cards.find(
            (card) => card.id === draggableId
        );

        if (sourceColumn === destinationColumn) {
            const newCards = [...sourceColumn.cards];
            newCards.splice(source.index, 1);
            newCards.splice(destination.index, 0, draggedCard!);

            const newBoardData = [...boardData];
            newBoardData[sourceColumnIndex] = {
                ...sourceColumn,
                cards: newCards,
            };

            setBoardData(newBoardData);
        } else {
            const sourceCards = [...sourceColumn.cards];
            sourceCards.splice(source.index, 1);

            const destinationCards = [...destinationColumn.cards];
            destinationCards.splice(destination.index, 0, draggedCard!);

            const newBoardData = [...boardData];
            newBoardData[sourceColumnIndex] = {
                ...sourceColumn,
                cards: sourceCards,
            };
            newBoardData[destinationColumnIndex] = {
                ...destinationColumn,
                cards: destinationCards,
            };

            setBoardData(newBoardData);
        }
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div
                className={clsx(
                    "overflow-x-scroll pb-0.5 custom-scrollbar flex items-start gap-0.75 h-full",
                    className
                )}>
                {boardData.map((column) => (
                    <Droppable
                        key={column.id}
                        droppableId={column.id}
                        direction="vertical">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="flex-shrink-0 w-64 flex flex-col rounded-1 bg-gray-50 shadow-sm">
                                <Column column={column} />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
                <AddColumn />
            </div>
        </DragDropContext>
    );
};
