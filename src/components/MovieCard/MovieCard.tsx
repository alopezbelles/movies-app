// src/components/MovieCard.tsx
import './MovieCard.css';
import type { Movie } from '../../hooks/useMovies';
import { getImageUrl, formatRating } from '../../hooks/useMovies';

interface MovieCardProps {
  movie: Movie;
  onClick?: (movie: Movie) => void;
}

function MovieCard({ movie, onClick }: MovieCardProps) {
  const handleClick = () => {
    onClick?.(movie);
  };

  return (
    <article className="movie-card" onClick={handleClick}>
      <figure className="image-container">
        <img 
          src={getImageUrl(movie.poster_path)} 
          alt={movie.title}
          loading="lazy"
        />
      </figure>
      <div className="content">
        <h3 className="title">{movie.title}</h3>
        <div className="rating">
          <span className="star">⭐</span>
          <span className="score">{formatRating(movie.vote_average)}/10</span>
        </div>
        <button className="btn-details" onClick={handleClick}>
          Ver detalles
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
