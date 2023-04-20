import Beneficios from "./pages/Beneficios";
import SejaSocio from "./pages/SejaSocio";
import { Routes, Route, BrowserRouter } from "react-router-dom";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SejaSocio />} />
        <Route path='/beneficios' element={<Beneficios />} />
      </Routes>
    </BrowserRouter>
  )
}