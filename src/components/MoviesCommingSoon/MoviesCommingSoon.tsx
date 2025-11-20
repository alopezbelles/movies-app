
import { useUpcomingMovies } from '../../hooks/useMovies';
import { getImageUrl, formatRating } from '../../hooks/useMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import type { Movie } from '../../hooks/useMovies';
import './MoviesCommingSoon.css';

interface MoviesCommingSoonProps {
  onMovieClick?: (movie: Movie) => void;
}

function MoviesCommingSoon({ onMovieClick }: MoviesCommingSoonProps) {
  const { movies, loading, error } = useUpcomingMovies(8);

  const handleMovieClick = (movie: Movie) => {
    onMovieClick?.(movie);
  };

  if (loading) {
    return (
      <section className="movies-coming-soon">
        <h2 className="section-title">Próximamente</h2>
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Cargando próximos estrenos...</p>
        </div>
      </section>
    );
  }

  if (error || movies.length === 0) {
    return (
      <section className="movies-coming-soon">
        <h2 className="section-title">Próximamente</h2>
        <div className="error-state">
          <p>{error || 'No hay próximos estrenos disponibles'}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="movies-coming-soon">
      <h2 className="section-title">Próximamente</h2>
      <div className="upcoming-movies-list">
        {movies.map((movie) => (
          <article 
            key={movie.id}
            className="movie-card"
            onClick={() => handleMovieClick(movie)}
          >
            <figure className="image-container">
              <img 
                src={getImageUrl(movie.poster_path, 'w300')}
                alt={movie.title}
                loading="lazy"
              />
            </figure>
            <div className="content">
              <h3 className="title">{movie.title}</h3>
              <p className="movie-overview">
                {movie.overview 
                  ? movie.overview.length > 100 
                    ? `${movie.overview.substring(0, 100)}...`
                    : movie.overview
                  : 'Descripción no disponible'
                }
              </p>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} className="star" />
                <span className="score">{formatRating(movie.vote_average)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MoviesCommingSoon;