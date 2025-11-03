import MovieList from "../../components/MovieList/MovieList";
import MovieCard from "../../components/MovieCard/MovieCard";
import type { Movie } from "../../hooks/useMovies";
import './Home.css';

interface HomeProps {
  searchResults?: Movie[];
  isSearching?: boolean;
}

function Home({ searchResults = [], isSearching = false }: HomeProps) {
  const handleMovieClick = (movie: Movie) => {
    console.log('Película seleccionada:', movie);
    // Aquí puedes agregar navegación o modal de detalles
  };

  return (
    <main className="home">      
      {isSearching && searchResults.length > 0 ? (
        <section className="search-results">
          <div className="search-results-header">
            <h2 className="section-title">Resultados de búsqueda</h2>
            <p className="results-count">
              {searchResults.length} película{searchResults.length !== 1 ? 's' : ''} encontrada{searchResults.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="movies-grid">
            {searchResults.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={handleMovieClick}
              />
            ))}
          </div>
        </section>
      ) : isSearching && searchResults.length === 0 ? (
        <section className="no-results">
          <div className="no-results-content">
            <h3>No se encontraron películas</h3>
            <p>Intenta con otros términos de búsqueda</p>
          </div>
        </section>
      ) : (
        <MovieList category="popular" />
      )}
    </main>
  );
}

export default Home;
