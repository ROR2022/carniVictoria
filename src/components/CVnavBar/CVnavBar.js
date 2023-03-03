import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { darkPrimaryColor } from "../../assets/colors";
import { imageLogo, imageUbiBN } from "../../assets/imgLinks";
import {
  imageFaceBN,
  imageHomeBN,
  imageHorario,
  imageTelBN,
  imageWatsBN,
} from "../../assets/imgLinks";

const CVnavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#/">
          <img
            style={{ width: "50px" }}
            className="border rounded me-3"
            src={imageLogo}
            alt="logo"
          />
          <span style={{ color: darkPrimaryColor }} className="fs-6">
            Carniceria La Victoria
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://api.whatsapp.com/send?phone=5215522471005&text=%C2%A1Hola%20me%20gustaria%20hacer%20un%20pedido!">
              <img
                style={{ width: "20px" }}
                className="me-2"
                src={imageWatsBN}
                alt="imageWats"
              />
              Watsapp
            </Nav.Link>
            <Nav.Link href="tel:+525522471005">
              <img
                style={{ width: "20px" }}
                className="me-2"
                src={imageTelBN}
                alt="imageFace"
              />
              Llamar
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/profile.php?id=100085872317896">
              <img
                style={{ width: "20px" }}
                className="me-2"
                src={imageFaceBN}
                alt="imagePhone"
              />
              Facebook
            </Nav.Link>
            <Nav.Link href="https://maps.app.goo.gl/Rc7769yrWnVaFseZ7">
              <img
                style={{ width: "20px" }}
                className="me-2"
                src={imageUbiBN}
                alt="imageUbication"
              />
              Ubicacion
            </Nav.Link>
            <Nav.Link href="#/resena">
              ✏️ Escribir Reseña
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CVnavBar;
