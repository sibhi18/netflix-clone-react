import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import movies from "../data/Movies";
import "../Styles/Movies.css";

function Tvshow(){
    return(
        <>
          <Navbar />
          <div className="movies-page">
            <h1>Tv Shows</h1>
            <div className="movies-grid">
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </>
    )     
}

export default Tvshow;