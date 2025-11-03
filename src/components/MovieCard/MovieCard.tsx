// src/components/MovieCard.tsx
import './MovieCard.css';
import type { Movie } from '../../hooks/useMovies';
import { getImageUrl, formatRating } from '../../hooks/useMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faStar} className="star" />
          <span className="score">{formatRating(movie.vote_average)}/10</span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;
