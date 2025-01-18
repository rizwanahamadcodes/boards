import { cards, CardType } from "@/data/cards";
import { columns, ColumnType } from "@/data/columns";
import { formatDate } from "@/utils/datesUtil";
import { FaRegClock } from "react-icons/fa";

type BoardProps = {
    className?: string;
};
type BoardsDataType = ColumnType & {
    cards: CardType[];
};

export const Board = (props: BoardProps) => {
    const { className } = props;
    const boardData: BoardsDataType[] = columns.map((column) => ({
        ...column,
        cards: cards.filter((card) => card.columnId === column.id),
    }));

    return (
        <div className="overflow-x-scroll pb-0.5 custom-scrollbar flex items-start gap-0.75">
            {boardData.map((column) => (
                <Column column={column} />
            ))}
            <AddColumn />
        </div>
    );
};

export type ColumnProps = {
    children?: React.ReactNode;
    column: BoardsDataType;
};

const Column = (props: ColumnProps) => {
    const { children, column } = props;

    return (
        <div className="flex shrink-0 w-17 flex-col  rounded-1 bg-gray-50 shadow-sm">
            <div className="px-1.25 pt-1 mb-0.75">
                <h3 className="font-semibold text-gray-800 leading-1">
                    {column.name}
                </h3>
            </div>
            <div className="grow px-0.75 pb-0.75 space-y-0.5">
                {column.cards.map((card) => {
                    return <Card card={card}></Card>;
                })}
                <AddCard />
            </div>
        </div>
    );
};

type CardProps = {
    card: CardType;
};

export const Card = (props: CardProps) => {
    const { card } = props;

    return (
        <div className=" bg-white shadow p-0.5 rounded-0.5 flex flex-col gap-0.5">
            <h4 className="font-medium text-gray-700">{card.title}</h4>
            {card.dueDate ? (
                <div className="flex">
                    <div className="flex items-center gap-0.5">
                        <FaRegClock className="text-gray-500" />
                        <span className="text-gray-600 text-0.875">
                            {formatDate(card.dueDate)}
                        </span>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

type AddCardProps = {
    className?: string;
};

export const AddCard = (props: AddCardProps) => {
    const { className } = props;
    return (
        <div className="h-3 flex bg-transparent p-0.5 rounded-0.5 hover:bg-gray-100 cursor-pointer">
            <p className="font-medium text-gray-500 flex items-center leading-1 gap-0.5">
                <span className="text-1.75">+</span> Add Card
            </p>
        </div>
    );
};

export type AddColumnProps = {};

const AddColumn = (props: AddColumnProps) => {
    return (
        <div className="shrink-0 flex w-16 h-3 justify-center px-1  flex-col  rounded-1 bg-black/10 shadow-sm cursor-pointer">
            <p className="font-medium text-gray-800 flex items-center leading-1 gap-0.5">
                <span className="text-1.75">+</span> Add Card
            </p>
        </div>
    );
};
