
import { useState, useCallback, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSearchMovies } from '../../hooks/useMovies';
import './Header.css';

interface HeaderNavbarProps {
  onSearchResults?: (results: any[]) => void;
  onSearchStateChange?: (isSearching: boolean) => void;
}

function HeaderNavbar({ onSearchResults, onSearchStateChange }: HeaderNavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { movies, loading, error, searchMovies } = useSearchMovies();

  const handleSearch = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchStateChange?.(true);
      await searchMovies(searchQuery);
    }
  }, [searchQuery, searchMovies, onSearchStateChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Si el input se vacía, limpiar resultados
    if (!value.trim()) {
      onSearchStateChange?.(false);
      onSearchResults?.([]);
    }
  };

  // Enviar resultados al componente padre cuando cambien
  useEffect(() => {
    onSearchResults?.(movies);
  }, [movies, onSearchResults]);

  return (
    <Navbar expand="lg" className="header">
      <Container fluid>
        <Navbar.Brand href="#" className="brand">STREEMO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#action2" className="nav-link">Movies</Nav.Link>
            <NavDropdown title="Genres" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Drama</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">All Genres</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="nav-link">Favorites</Nav.Link>
          </Nav>
          
          <Form className="search-form" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search movies..."
              className="search-input"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
              disabled={loading}
            />
            <Button 
              variant="outline-success" 
              className="search-button"
              type="submit"
              disabled={loading || !searchQuery.trim()}
            >
              {loading ? 'Searching...' : 'Search'}
            </Button>
            
            {error && (
              <div className="search-error">
                <small className="text-danger">{error}</small>
              </div>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;