import { useState } from 'react';
import { useMovies } from '../../hooks/useMovies';
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import type { Movie } from '../../hooks/useMovies';

interface MovieListProps {
  category?: 'popular' | 'top_rated' | 'upcoming' | 'now_playing';
  customMovies?: Movie[];
  customTitle?: string;
  onMovieClick?: (movie: Movie) => void;
}

function MovieList({ 
  category = 'popular', 
  customMovies, 
  customTitle, 
  onMovieClick 
}: MovieListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Solo usar useMovies si NO tenemos customMovies
  const shouldFetch = !customMovies;
  const { movies: apiMovies, loading, error, totalPages } = useMovies(
    shouldFetch ? category : 'popular', 
    shouldFetch ? currentPage : 1
  );

  // Decidir qué datos usar
  const movies = customMovies || apiMovies;
  const isCustomMode = !!customMovies;

  const getTitle = () => {
    if (customTitle) return customTitle;
    
    switch (category) {
      case 'popular': return 'Películas Populares';
      case 'top_rated': return 'Mejor Valoradas';
      case 'upcoming': return 'Próximamente';
      case 'now_playing': return 'En Cartelera';
      default: return 'Películas';
    }
  };

  const getSubtitle = () => {
    if (isCustomMode) {
      if (movies.length === 0) return undefined;
      return `${movies.length} película${movies.length !== 1 ? 's' : ''} encontrada${movies.length !== 1 ? 's' : ''}`;
    }
    
    if (loading || error || movies.length === 0) return undefined;
    return `Mostrando ${movies.length} películas`;
  };

  return (
    <MoviesGrid
      movies={movies}
      title={getTitle()}
      subtitle={getSubtitle()}
      onMovieClick={onMovieClick}
      showPagination={!isCustomMode} // Solo paginación para datos de API
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      loading={!isCustomMode && loading}
      error={!isCustomMode ? error : null}
    />
  );
}

export default MovieList;