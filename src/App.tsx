import Navbar from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import Pagination from "@mui/material/Pagination";

import { Film } from "./models/Film";
import Slider from "react-slick";
import CarouselHome from "./pages/home/CarouselHome";

export type PopularFilms = {
  page: number,
  results: Film[],
  total_pages: number,
  total_results: number,
}

export default function App() {
  const [filmes, setFilmes] = useState<Film[]>([]);
  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=c53174418b2a81eacf8a7966fa850c98&language=pt-BR&page=${page}`;
  
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentPageItems = filmes.slice(start, end);

const handlePageChange = (event: any, newPage: number) => {
  setPage(newPage);
}

  useEffect(() => {
    axios.get<PopularFilms>(baseURL).then((response) => {
      setFilmes(response.data.results);
       console.log(response.data.results);
    });
  }, []);

return (
  <div id="principal">
        <Navbar  />
    <div className="carousel-home">
     <CarouselHome currentPageItems={currentPageItems} />
    </div>
    <div className="carousel-container">
    <Carousel >
        {currentPageItems.map((filme: Film, index: number) => (
          <div key={index} id="imagem-c">
            <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />
          </div>
        ))}
    </Carousel>

    </div>
    <Home className="home" filmes={currentPageItems} />
    
    <Pagination 
  page={page}
  count={Math.ceil(filmes.length / itemsPerPage)} 
  onChange={handlePageChange}
/>
  </div>
);
}