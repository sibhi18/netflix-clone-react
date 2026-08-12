import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import movies from "../data/Movies";
import "../Styles/NewPopular.css";

function NewPopular(){
    const popularMovies = movies
      .filter((movie) => movie.year >= 2022 || movie.rating >= 8.5)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 16);

    return(
      <>
        <Navbar />
        <div className="newpopular-page">
          <h1>New Popular</h1>
          <div className="newpopular-grid">
            {popularMovies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </>
    )
}

export default NewPopular;