import { useParams } from "react-router-dom";
import movies from "../data/Movies";
import "../Styles/Card.css";

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((item) => item.id === Number(id));

  if (!movie) {
    return <div className="card-container">Movie not found.</div>;
  }

  return (
    
        <div className="card detail-card">
          <img src={movie.image} alt={movie.title} className="card-image detail-image" />
          <div className="detail-content">
            <h1>{movie.title}</h1>
            <h3>⭐ {movie.rating}</h3>
            <h3>📅 {movie.year}</h3>
            <h3>{movie.category}</h3>
          </div>
        </div>
        
  );
}

export default MovieDetails;

