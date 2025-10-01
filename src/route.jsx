import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";


export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/sobre" element={<Sobre/>} />
            </Routes>
        </BrowserRouter>
    )
}