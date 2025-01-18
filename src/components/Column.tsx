import { Card } from "@/components/Card";
import { Draggable } from "@hello-pangea/dnd";

export type ColumnProps = {
    children?: React.ReactNode;
    column: {
        id: string;
        name: string;
        cards: {
            id: string;
            title: string;
            dueDate?: string;
        }[];
    };
};

export const Column = (props: ColumnProps) => {
    const { column } = props;

    return (
        <div className="max-h-full overflow-hidden shrink-0 w-16 min-w-16 flex flex-col rounded-1 bg-gray-50 shadow-sm">
            <div className="px-1.25 pt-1 mb-0.75">
                <h3 className="font-semibold text-gray-800 leading-1">
                    {column.name}
                </h3>
            </div>
            <div className="grow relative px-0.75 mb-0.75 space-y-0.5">
                {column.cards.map((card, index) => (
                    <Draggable
                        key={card.id}
                        draggableId={card.id}
                        index={index}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}>
                                <Card card={card} />
                            </div>
                        )}
                    </Draggable>
                ))}
            </div>
            {/* <div className="px-0.75 pb-0.75">
                <AddCard columnId={column.id} />
            </div> */}
        </div>
    );
};
