import { Film } from '../../App';
import MovieCard from '../../components/movieCard/MovieCard';
import './home.css'

type HomeProps = {
  filmes: Film[];
};

export function Home(props: HomeProps): JSX.Element {
  return (
    <>
     <div id="card-pai">
        <div id="listaFilmesPopulares">
            {props.filmes.map((filme: Film, index: number) => (      
      
                <MovieCard key={index} filmes={props.filmes} />         
            
              ))}
        </div>
     </div>
    </>
  );
}
