import { useState } from "react";
import { useBoardData } from "@/context/BoardDataContext";
import { v4 as uuidv4 } from "uuid";

export const AddCard = ({ columnId }: { columnId: string }) => {
    const { addCard } = useBoardData();
    const [cardTitle, setCardTitle] = useState("");

    const handleAddCard = () => {
        if (cardTitle.trim()) {
            const newCard = {
                id: uuidv4(),
                title: cardTitle,
            };
            addCard(columnId, newCard);
            setCardTitle("");
        }
    };

    return (
        <div
            className="h-3 mt-auto flex bg-transparent border rounded-0.5 hover:bg-gray-100 cursor-pointer"
            onClick={handleAddCard}>
            <form
                className="grow h-full"
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <input
                    type="text"
                    value={cardTitle}
                    onChange={(e) => setCardTitle(e.target.value)}
                    placeholder="Enter card title"
                    className="h-full"
                />
            </form>
            <p className="font-medium text-gray-500 flex items-center leading-1 gap-0.5">
                <span className="text-1.75">+</span>
            </p>
        </div>
    );
};
