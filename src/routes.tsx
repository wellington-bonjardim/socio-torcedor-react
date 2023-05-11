import Footer from "componentes/Footer";
import Beneficios from "./paginas/Beneficios";
import SejaSocio from "./paginas/SejaSocio";
import { Routes, Route, BrowserRouter } from "react-router-dom";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SejaSocio />} />
        <Route path='/beneficios' element={<Beneficios />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}