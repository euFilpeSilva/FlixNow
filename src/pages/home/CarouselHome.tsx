import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Film } from '../../models/Film';
import './carouselHome.css';
import { PopularFilms } from '../../App';
import axios from 'axios';
import FundoHome from '../../components/fundoHome/FundoHome';

const CarouselHome = (props: any) => {
  const [filmes, setFilmes] = React.useState<Film[]>([]);
  const [page, setPage] = React.useState<number>(2);
  const [itemsPerPage, setItemsPerPage] = React.useState<number>(10);

  const start = (page - 1) * itemsPerPage;
  const end = Math.min(start + itemsPerPage, filmes.length);
  const currentPageItems = filmes.slice(start, end);

  const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=c53174418b2a81eacf8a7966fa850c98&language=pt-BR&page=${page}`;

  useEffect(() => {
    axios.get<PopularFilms>(baseURL).then((response) => {
      setFilmes(response.data.results);
    });
  }, []);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2500, // tempo em milissegundos (5 segundos)
    };

  return (
    <>

    <div className="carousel-home">
          <Slider {...settings}>
            {currentPageItems.map((filme: Film, index: number) => (
              <div key={index}>
              <img className='imagem' src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />
            </div>
          ))}
        </Slider>
    </div>
    </>

  );
};

export default CarouselHome;
