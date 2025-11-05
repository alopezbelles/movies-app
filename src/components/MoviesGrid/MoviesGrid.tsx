import { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import type { Movie } from '../../hooks/useMovies';
import './MoviesGrid.css';

interface MoviesGridProps {
  movies: Movie[];
  title?: string;
  subtitle?: string;
  onMovieClick?: (movie: Movie) => void;
  showPagination?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  loading?: boolean;
  error?: string | null;
}

function MoviesGrid({ 
  movies,
  title,
  subtitle,
  onMovieClick,
  showPagination = false,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  loading = false,
  error = null
}: MoviesGridProps) {
  
  const handleMovieClick = (movie: Movie) => {
    if (onMovieClick) {
      onMovieClick(movie);
    } else {
      console.log('Película seleccionada:', movie);
    }
  };

  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section className="movies-grid-container">
        <div className="movies-grid-loading">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Cargando películas...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="movies-grid-container">
        <div className="movies-grid-error">
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
      </section>
    );
  }

  if (movies.length === 0) {
    return (
      <section className="movies-grid-container">
        <div className="movies-grid-empty">
          <h3>No se encontraron películas</h3>
          <p>Intenta con otros términos de búsqueda</p>
        </div>
      </section>
    );
  }

  return (
    <section className="movies-grid-container">
      {(title || subtitle) && (
        <div className="movies-grid-header">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={handleMovieClick}
          />
        ))}
      </div>

      {showPagination && totalPages > 1 && (
        <div className="movies-grid-pagination">
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

export default MoviesGrid;