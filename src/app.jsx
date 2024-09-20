import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./components/Portfolio";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Portfolio />
    </StrictMode>
);
