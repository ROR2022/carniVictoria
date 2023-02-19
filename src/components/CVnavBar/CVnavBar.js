import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { darkPrimaryColor } from '../../assets/colors';
import { imageLogo } from '../../assets/imgLinks';
import { imageFaceBN, imageHomeBN, imageHorario, imageTelBN, imageWatsBN } from '../../assets/imgLinks'

const CVnavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img style={{width: '50px'}} className='border rounded me-3' src={imageLogo} alt="logo" />
          <span style={{color:darkPrimaryColor}} className='fs-6'>Carniceria La Victoria</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">
            <img style={{width:'20px'}} className='me-2' src={imageWatsBN} alt="imageWats" />
              Watsapp
              </Nav.Link>
            <Nav.Link href="#">
            <img style={{width:'20px'}} className='me-2' src={imageFaceBN} alt="imageFace" />
              Llamar</Nav.Link>
            <Nav.Link href="#">
            <img style={{width:'20px'}} className='me-2' src={imageTelBN} alt="imagePhone" />
              Facebook</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CVnavBar