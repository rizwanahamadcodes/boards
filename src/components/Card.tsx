import { FaRegClock } from "react-icons/fa";
import { formatDate } from "@/utils/datesUtil";

export type CardProps = {
    card: {
        id: string;
        title: string;
        dueDate?: string;
    };
};

export const Card = (props: CardProps) => {
    const { card } = props;

    return (
        <div className="bg-white select-none shadow px-1 py-0.5 rounded-0.5 flex flex-col gap-0.5">
            <h4 className="font-medium text-gray-700">{card.title}</h4>
            {card.dueDate && (
                <div className="flex items-center gap-0.5">
                    <FaRegClock className="text-gray-500" />
                    <span className="text-gray-600 text-0.875">
                        {formatDate(card.dueDate)}
                    </span>
                </div>
            )}
        </div>
    );
};
