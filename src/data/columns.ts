export type ColumnType = {
    id: string;
    name: string;
    cardIds: string[];
    createdAt: string;
    updatedAt: string;
};
export const columns: ColumnType[] = [
    {
        id: "col-1",
        name: "To Do",
        cardIds: ["card-1", "card-2", "card-3", "card-4"],
        createdAt: "2025-01-01T10:00:00Z",
        updatedAt: "2025-01-01T10:00:00Z",
    },
    {
        id: "col-2",
        name: "In Progress",
        cardIds: ["card-5", "card-6", "card-7"],
        createdAt: "2025-01-01T10:00:00Z",
        updatedAt: "2025-01-01T10:00:00Z",
    },
    {
        id: "col-3",
        name: "Done",
        cardIds: ["card-8", "card-9", "card-10"],
        createdAt: "2025-01-01T10:00:00Z",
        updatedAt: "2025-01-01T10:00:00Z",
    },
    {
        id: "col-3",
        name: "Done",
        cardIds: ["card-8", "card-9", "card-10"],
        createdAt: "2025-01-01T10:00:00Z",
        updatedAt: "2025-01-01T10:00:00Z",
    },
];
