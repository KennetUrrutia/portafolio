import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, NavBar } from "./components/main";
import { Contacto, Inicio, PortafolioWeb, SobreMi } from "./screens/main";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/portafolio' element={<PortafolioWeb />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
