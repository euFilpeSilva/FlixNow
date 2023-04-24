import { Film } from "../../App";
import "./movieCard.css";

type FilmesCardProps = {
  // movie: Movie;
  filmes: Film[];
};

function MovieCard({ filmes }: FilmesCardProps): JSX.Element {

  return (
    <>
       {filmes.map((filme: Film, index: number) => (

        <div className="movie-card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />
        </div>
      ))} 

    </>    
  );
}

export default MovieCard;

            {/* <h2>{filme.title}</h2> */}
            {/* <p>{filme.vote_average}</p>   */}