import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const name = "Vova";
const first_page = 2023;

createRoot(document.getElementById("root")).render(
  <StrictMode><App/></StrictMode>
);
