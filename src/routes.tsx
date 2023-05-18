import Footer from "componentes/Footer";
import Beneficios from "./paginas/Beneficios";
import SejaSocio from "./paginas/SejaSocio";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PaginaPadrao from "componentes/PaginaPadrao";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<SejaSocio />} />
          <Route path='beneficios' element={<Beneficios />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}