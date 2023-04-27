import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Film } from '../../models/Film';
import './carouselHome.css';

const CarouselHome = (props: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000 // tempo em milissegundos (5 segundos)
  };

  return (
    <>
    <div className='secundary'>
           {/* <p className='destaques' ><strong>Destaques</strong></p> */}
        <Slider {...settings}>
          {props.currentPageItems.map((filme: Film, index: number) => (
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
