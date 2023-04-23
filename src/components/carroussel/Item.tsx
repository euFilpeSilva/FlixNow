import { Button, Paper } from "@mui/material";
import { Film } from "../../App";

type FilmesCardProps = {
  // movie: Movie;
  filmes: Film[];
};

export default function Item({ filmes }: FilmesCardProps)
{
    return (
        <Paper>
           <>
      {filmes.map((filme: Film, index: number) => (

        <div key={index}>
          <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />
        </div>
      ))}
    </>    
            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}