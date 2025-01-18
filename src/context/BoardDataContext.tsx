import React, { createContext, useContext, useState } from "react";
import { cards, CardType } from "@/data/cards";
import { columns, ColumnType } from "@/data/columns";

export type BoardsDataType = ColumnType & {
    cards: CardType[];
};

type BoardDataContextType = {
    boardData: BoardsDataType[];
    setBoardData: React.Dispatch<React.SetStateAction<BoardsDataType[]>>;
    addCard: (columnId: string, card: CardType) => void;
    removeCard: (cardId: string) => void;
    addColumn: (column: ColumnType) => void;
    removeColumn: (columnId: string) => void;
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

    const addCard = (columnId: string, card: CardType) => {
        setBoardData((prevBoardData) => {
            return prevBoardData.map((column) => {
                if (column.id === columnId) {
                    return {
                        ...column,
                        cards: [...column.cards, card],
                    };
                }
                return column;
            });
        });
    };

    const removeCard = (cardId: string) => {
        setBoardData((prevBoardData) => {
            return prevBoardData.map((column) => ({
                ...column,
                cards: column.cards.filter((card) => card.id !== cardId),
            }));
        });
    };

    const addColumn = (column: ColumnType) => {
        setBoardData((prevBoardData) => [
            ...prevBoardData,
            { ...column, cards: [] },
        ]);
    };

    const removeColumn = (columnId: string) => {
        setBoardData((prevBoardData) =>
            prevBoardData.filter((column) => column.id !== columnId)
        );
    };

    return (
        <BoardDataContext.Provider
            value={{
                boardData,
                setBoardData,
                addCard,
                removeCard,
                addColumn,
                removeColumn,
            }}>
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
