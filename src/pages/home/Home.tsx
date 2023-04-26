import MovieCard from '../../components/movieCard/MovieCard';
import './home.css'
import { Film } from '../../models/Film';

export function Home(props: any): JSX.Element {

  return (
    <>
     <div id="card-pai">
        <div id="listaFilmesPopulares">
            {props.filmes.map((filme: Film, index: number) => (      
      
                <MovieCard key={index} filmes={filme} />         
              ))}
        </div>
     </div>
    </>
  );
}