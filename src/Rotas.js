import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from './Components/Login/Index'

function RotasPG() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h1>Oi</h1>} />
                </Routes>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RotasPG;