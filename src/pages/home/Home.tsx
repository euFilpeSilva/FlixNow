import MovieCard from '../../components/movieCard/MovieCard';
import './home.css'
import { Film } from '../../models/Film';

export function Home(props: any): JSX.Element {

  return (
    <>
    <p className='popular' ><strong>Filmes Populares</strong></p>
        <div id="listaFilmesPopulares">
            {props.filmes.map((filme: Film, index: number) => (      
      
                <MovieCard key={index} filmes={filme} />         
              ))}
        </div>
    </>
  );
}