export type CardType = {
    id: string;
    title: string;
    description: string;
    columnId: string;
    dueDate?: string;
    labels: string[];
    priority: "low" | "medium" | "high";
    createdAt: string;
    updatedAt: string;
};

export const cards: CardType[] = [
    {
        id: "card-1",
        title: "Set up project repo",
        description: "Initialize a GitHub repository for the Kanban project.",
        columnId: "col-1",
        dueDate: "2025-01-20T12:00:00Z",
        labels: ["setup", "backend"],
        priority: "high",
        createdAt: "2025-01-01T11:00:00Z",
        updatedAt: "2025-01-01T11:00:00Z",
    },
    {
        id: "card-2",
        title: "Design database schema",
        description: "Plan and document the database schema for the project.",
        columnId: "col-1",
        dueDate: "2025-01-22T12:00:00Z",
        labels: ["design", "backend"],
        priority: "medium",
        createdAt: "2025-01-01T11:30:00Z",
        updatedAt: "2025-01-01T11:30:00Z",
    },
    {
        id: "card-3",
        title: "Build authentication system",
        description: "Implement user login, registration, and authorization.",
        columnId: "col-1",
        dueDate: "2025-01-25T12:00:00Z",
        labels: ["backend", "auth"],
        priority: "high",
        createdAt: "2025-01-01T12:00:00Z",
        updatedAt: "2025-01-01T12:00:00Z",
    },
    {
        id: "card-4",
        title: "Create Kanban board UI",
        description: "Design and implement the UI for the Kanban board.",
        columnId: "col-1",
        dueDate: "2025-01-27T12:00:00Z",
        labels: ["frontend", "UI"],
        priority: "high",
        createdAt: "2025-01-01T12:30:00Z",
        updatedAt: "2025-01-01T12:30:00Z",
    },
    {
        id: "card-5",
        title: "Implement drag-and-drop feature",
        description:
            "Enable drag-and-drop functionality for moving cards between columns.",
        columnId: "col-1",
        dueDate: "2025-01-30T12:00:00Z",
        labels: ["frontend", "UX"],
        priority: "high",
        createdAt: "2025-01-02T10:00:00Z",
        updatedAt: "2025-01-02T10:00:00Z",
    },
    {
        id: "card-6",
        title: "Integrate with backend",
        description: "Connect the frontend to the backend API.",
        columnId: "col-1",
        dueDate: "2025-01-31T12:00:00Z",
        labels: ["integration", "API"],
        priority: "medium",
        createdAt: "2025-01-02T11:00:00Z",
        updatedAt: "2025-01-02T11:00:00Z",
    },
    {
        id: "card-7",
        title: "Test drag-and-drop feature",
        description:
            "Perform unit and integration tests on the drag-and-drop functionality.",
        columnId: "col-1",
        dueDate: "2025-02-02T12:00:00Z",
        labels: ["testing"],
        priority: "low",
        createdAt: "2025-01-02T12:00:00Z",
        updatedAt: "2025-01-02T12:00:00Z",
    },
    {
        id: "card-8",
        title: "Deploy to staging environment",
        description:
            "Set up and deploy the application to the staging environment.",
        columnId: "col-1",
        dueDate: null,
        labels: ["deployment"],
        priority: "medium",
        createdAt: "2025-01-03T10:00:00Z",
        updatedAt: "2025-01-03T10:00:00Z",
    },
    {
        id: "card-9",
        title: "Fix CSS bugs",
        description: "Resolve styling issues reported during testing.",
        columnId: "col-1",
        dueDate: null,
        labels: ["frontend", "bugfix"],
        priority: "low",
        createdAt: "2025-01-03T11:00:00Z",
        updatedAt: "2025-01-03T11:00:00Z",
    },
    {
        id: "card-10",
        title: "Prepare project documentation",
        description:
            "Document the project features, architecture, and setup instructions.",
        columnId: "col-1",
        dueDate: "2025-02-05T12:00:00Z",
        labels: ["documentation"],
        priority: "medium",
        createdAt: "2025-01-03T12:00:00Z",
        updatedAt: "2025-01-03T12:00:00Z",
    },
];
