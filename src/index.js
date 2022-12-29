import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Exemplo01 from '../src/Hooks/Ex01_useState'
import Exemplo02 from '../src/Hooks/Ex02_useState'
import Exemplo03 from "../src/Hooks/Ex03_useState"
import Exemplo04 from "../src/Hooks/Ex04_useState"
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Exemplo04/>
    
  </StrictMode>
);
