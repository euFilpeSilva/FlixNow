import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Film } from "./models/Film";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Perfil from "./pages/perfil/Perfil";
import Layout from "./components/Layout";

export type PopularFilms = {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
};

export default function App() {
  const [onPerfil, setOnPerfil] = useState<boolean>(false);


  function estadoPerfil(event) {
    setOnPerfil(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout estadoPerfil={estadoPerfil} />}>
          {!onPerfil ? (
            <Route path="/">
              <Route path="home" element={<Home />} />
              <Route path="/" element={<Navigate to="/home" replace />} />
            </Route>
          ) : (
            <Route path="perfil">
              <Route index element={<Perfil />} />
            </Route>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
