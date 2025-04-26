import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FinancialsTargets } from "./screens/FinancialsTargets/FinancialsTargets";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FinancialsTargets />
  </StrictMode>,
);
