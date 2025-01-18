import React, { createContext, useContext, useState } from "react";
import { cards, CardType } from "@/data/cards";
import { columns, ColumnType } from "@/data/columns";

export type BoardsDataType = ColumnType & {
    cards: CardType[];
};

type BoardDataContextType = {
    boardData: BoardsDataType[];
    setBoardData: React.Dispatch<React.SetStateAction<BoardsDataType[]>>;
};

const BoardDataContext = createContext<BoardDataContextType | undefined>(
    undefined
);

export const BoardDataProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [boardData, setBoardData] = useState<BoardsDataType[]>(
        columns.map((column) => ({
            ...column,
            cards: cards.filter((card) => card.columnId === column.id),
        }))
    );

    return (
        <BoardDataContext.Provider value={{ boardData, setBoardData }}>
            {children}
        </BoardDataContext.Provider>
    );
};

export const useBoardData = () => {
    const context = useContext(BoardDataContext);
    if (!context) {
        throw new Error("useBoardData must be used within a BoardDataProvider");
    }
    return context;
};
