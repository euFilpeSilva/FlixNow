import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard(props: any) {
const {filmes} = props;
const navigate = useNavigate();
// const baseURL = `https://api.themoviedb.org/3/movie/${filmes.id}/popular?api_key=c53174418b2a81eacf8a7966fa850c98&language=pt-BR&page=page`;

function detalhes() {
    navigate(`/detalhes/${filmes.id}`);
}

  return (
    <>
    <div className="movie-card">
         <button onClick={detalhes} title="button" key={ filmes.id }>
              {<img src={`https://image.tmdb.org/t/p/w500${filmes.poster_path}`} alt={filmes.poster_path} />}
         </button>
    </div>
    </>    
  )

}

export default MovieCard;
