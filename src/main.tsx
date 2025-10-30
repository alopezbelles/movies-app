import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
// import App from "./App.tsx";
import { BrowserRouter, Routes } from "react-router";
import Header from "./components/Header/Header.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      {/* Aquí irán tus rutas */}
    </Routes>
    {/* Puedes agregar <App /> aquí si necesitas contenido adicional */}
  </BrowserRouter>
);
