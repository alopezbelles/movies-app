import { useState } from 'react';
import { useMovies } from '../../hooks/useMovies';
import MovieCard from '../MovieCard/MovieCard';
import type { Movie } from '../../hooks/useMovies';
import './MovieList.css';

interface MovieListProps {
  category?: 'popular' | 'top_rated' | 'upcoming' | 'now_playing';
}

function MovieList({ category = 'popular' }: MovieListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { movies, loading, error, totalPages } = useMovies(category, currentPage);

  const handleMovieClick = (movie: Movie) => {
    console.log('Película seleccionada:', movie);
    // Aquí puedes agregar navegación o modal de detalles
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="movie-list-loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Cargando películas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="movie-list-error">
        <div className="error-message">
          <h3>Error al cargar películas</h3>
          <p>{error}</p>
          <button 
            className="retry-button" 
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="movie-list">
      <div className="movie-list-header">
        <h2 className="section-title">
          {category === 'popular' && 'Películas Populares'}
          {category === 'top_rated' && 'Mejor Valoradas'}
          {category === 'upcoming' && 'Próximamente'}
          {category === 'now_playing' && 'En Cartelera'}
        </h2>
        <p className="results-count">
          Mostrando {movies.length} películas
        </p>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={handleMovieClick}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Anterior
          </button>
          
          <span className="pagination-info">
            Página {currentPage} de {totalPages}
          </span>
          
          <button
            className="pagination-btn"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Siguiente
          </button>
        </div>
      )}
    </section>
  );
}

export default MovieList;