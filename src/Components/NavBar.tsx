
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../CSSFiles/myNav.css'

/*
add these once features added
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#" disabled>
              Sign out
            </Nav.Link>
*/

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" bg="secondary">
      <Container fluid>
        <Navbar.Brand href="/">Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;