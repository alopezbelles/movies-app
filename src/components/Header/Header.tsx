
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

function HeaderNavbar() {
  return (
    <Navbar expand="lg" className="header-navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="header-brand">Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="header-nav-link">Home</Nav.Link>
            <Nav.Link href="#action2" className="header-nav-link">Movies</Nav.Link>
            <NavDropdown title="Genres" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Drama</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">All Genres</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="header-nav-link">Favorites</Nav.Link>
          </Nav>
          <Form className="header-search-form">
            <Form.Control
              type="search"
              placeholder="Search movies..."
              className="header-search-input"
              aria-label="Search"
            />
            <Button variant="outline-success" className="header-search-button">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;