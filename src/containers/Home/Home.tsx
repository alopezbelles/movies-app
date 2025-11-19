import MovieList from "../../components/MovieList/MovieList";
import MoviesCommingSoon from "../../components/MoviesCommingSoon/MoviesCommingSoon";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import type { Movie } from "../../hooks/useMovies";
import "./Home.css";

interface HomeProps {
  searchResults?: Movie[];
  isSearching?: boolean;
}

function Home({ searchResults = [], isSearching = false }: HomeProps) {
  const handleMovieClick = (movie: Movie) => {
    console.log("Película seleccionada:", movie);
    // Aquí puedes agregar navegación o modal de detalles
  };

  return (
    <main className="home">
      <div className="main-content">
        <MovieSlider onMovieClick={handleMovieClick} />
        <MovieList
          category={isSearching ? undefined : "popular"}
          customMovies={isSearching ? searchResults : undefined}
          customTitle={isSearching ? "Resultados de búsqueda" : undefined}
          onMovieClick={handleMovieClick}
        />
      </div>

      <aside className="sidebar">
        <MoviesCommingSoon />
      </aside>
    </main>
  );
}

export default Home;
