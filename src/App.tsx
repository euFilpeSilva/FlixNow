import Navbar from "./components/navbar/Navbar";
import { Movie } from "./models/Movie";
import { Home } from "./pages/home/Home";
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import Pagination from "@mui/material/Pagination";
// import {Outlet} from "react-router-dom";



export type Film = {
  id: number,
  title: string,
  poster_path: string,
  vote_average: number,
  genre_ids: number[],
}

export type PopularFilms = {
  page: number,
  results: Film[],
  total_pages: number,
  total_results: number,
}

export default function App() {
  const [filmes, setFilmes] = useState<Film[]>([]);

  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);

const handlePageChange = (event: any, newPage: number) => {
  setPage(newPage);
}


    const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=c53174418b2a81eacf8a7966fa850c98&language=pt-BR&page=${page}`;

  useEffect(() => {
    axios.get<PopularFilms>(baseURL).then((response) => {
      setFilmes(response.data.results);
    });
  }, []);

  const start = (page - 1) * itemsPerPage;
const end = start + itemsPerPage;
const currentPageItems = filmes.slice(start, end);

return (
  <div id="principal">
    <Navbar />
    <div className="carousel-container">
      {/* <Outlet/> */}
    <Carousel >
      {currentPageItems.map((filme: Film, index: number) => (
        <div key={index} id="imagem-c">
          <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />
        </div>
      ))}
    </Carousel>
    </div>
    <Home filmes={currentPageItems} />
    <Pagination 
  page={page} 
  count={Math.ceil(filmes.length / itemsPerPage)} 
  onChange={handlePageChange}
/>
  </div>
);
}