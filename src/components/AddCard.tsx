import { useState } from "react";
import { useBoardData } from "@/context/BoardDataContext";
import { v4 as uuidv4 } from "uuid";
import { CardType } from "@/data/cards";

export const AddCard = ({ columnId }: { columnId: string }) => {
    const { addCard } = useBoardData();
    const [cardTitle, setCardTitle] = useState("");

    const handleAddCard = () => {
        if (cardTitle.trim()) {
            const newCard: CardType = {
                id: uuidv4(),
                title: cardTitle,
                description:
                    "Initialize a GitHub repository for the Kanban project.",
                columnId: "col-1",
                dueDate: "2025-01-20T12:00:00Z",
                labels: ["setup", "backend"],
                priority: "high",
                createdAt: "2025-01-01T11:00:00Z",
                updatedAt: "2025-01-01T11:00:00Z",
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
