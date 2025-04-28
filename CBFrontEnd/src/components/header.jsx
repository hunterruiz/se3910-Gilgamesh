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
    <div style={{ color: "white" }}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" onClick={handleLogout} style={{ color: "white" }}>Commerce Bank | URL Analysis</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard" style={{ color: "white" }}>ANALYZE</Nav.Link>
              <Nav.Link href="/saved" style={{ color: "white" }}>SAVED</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
      
      
  );


  
}

export default Header;


