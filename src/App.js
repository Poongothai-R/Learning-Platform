import "./styles/global/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";


export default function App() {
    return (
        <BrowserRouter>
            <WelcomePage />
            <Routes>


            </Routes>
        </BrowserRouter>
    );
}

