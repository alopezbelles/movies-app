import { useState, useEffect } from 'react';

// Tipos para la API de TMDB
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// Configuración de la API
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Hook personalizado para obtener películas
export const useMovies = (endpoint: string = 'popular', page: number = 1) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!API_KEY) {
          throw new Error('API Key de TMDB no configurada');
        }

        const response = await fetch(
          `${BASE_URL}/movie/${endpoint}?api_key=${API_KEY}&page=${page}&language=es-ES`
        );

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data: MoviesResponse = await response.json();
        setMovies(data.results.slice(0, 10));
        setTotalPages(data.total_pages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [endpoint, page]);

  return { movies, loading, error, totalPages };
};

// Hook para buscar películas
export const useSearchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchMovies = async (query: string, page: number = 1) => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (!API_KEY) {
        throw new Error('API Key de TMDB no configurada');
      }

      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}&page=${page}&language=es-ES`
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data: MoviesResponse = await response.json();
      // Limitamos a 10 películas por página en lugar de las 20 que devuelve TMDB
      setMovies(data.results.slice(0, 10));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error en la búsqueda');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, error, searchMovies };
};

// Utilidad para obtener URL completa de imágenes
export const getImageUrl = (path: string | null, size: 'w300' | 'w500' | 'w780' | 'original' = 'w500') => {
  if (!path) return '/placeholder-movie.svg'; // Imagen por defecto
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// Utilidad para formatear el rating
export const formatRating = (rating: number) => {
  return Math.round(rating * 10) / 10;
};