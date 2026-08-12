import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import movies from "../data/Movies";
import "../Styles/Movies.css";

function Movies(){
    return(
        <>
          <Navbar />
          <div className="movies-page">
            <h1>Movies</h1>
            <div className="movies-grid">
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </>
    )     
}

export default Movies;