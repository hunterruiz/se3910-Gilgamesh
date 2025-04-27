import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  // from react bootstrap Navbar
  // Documentation link : https://react-bootstrap.netlify.app/docs/components/navbar/

  const handleLogout =()=>{
    localStorage.clear();
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" onClick={handleLogout}>Commerce Bank | URL Analysis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">ANALYZE</Nav.Link>
            <Nav.Link href="/saved">SAVED</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      
  );


  
}

export default Header;


