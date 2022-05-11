import { Routes, Route } from "react-router-dom";
import CompHeader from "./Components/HeaderUsuario/Header_User";

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/CompHeader" element={<CompHeader />} />
      </Routes>
    </>
  );
}
