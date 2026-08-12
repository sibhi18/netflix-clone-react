import { Link } from "react-router-dom";
import "../Styles/Card.css";

function Card({ movie, onAdd, buttonText = "❤️ My List", buttonClass = "add-button" }) {
  return (
    <div className="card-wrapper">
      <Link to={`/movie/${movie.id}`} className="card-link">
        <div className="card-container">
          <div className="card">
            <img src={movie.image} alt={movie.title} className="card-image" />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
        </div>
      </Link>

      {onAdd && (
        <button onClick={() => onAdd(movie)} className={`card-action ${buttonClass}`}>
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default Card;
