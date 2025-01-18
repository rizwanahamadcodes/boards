import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BoardDataProvider } from "./context/BoardDataContext.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BoardDataProvider>
            <App />
        </BoardDataProvider>
    </StrictMode>
);
