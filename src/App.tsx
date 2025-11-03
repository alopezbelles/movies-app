import { useState } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import type { Movie } from './hooks/useMovies';

function App() {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchResults = (results: Movie[]) => {
    setSearchResults(results);
  };

  const handleSearchStateChange = (searching: boolean) => {
    setIsSearching(searching);
  };

  return (
    <>
      <Header 
        onSearchResults={handleSearchResults}
        onSearchStateChange={handleSearchStateChange}
      />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              searchResults={searchResults}
              isSearching={isSearching}
            />
          } 
        />
      </Routes>
    </>
  );
}

export default App;