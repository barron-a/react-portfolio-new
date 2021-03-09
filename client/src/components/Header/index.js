import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import coverImage from '../../assets/cover-image/cover-image.jpg';

const routes = [
    { text: "About", path: "/" },
    { text: "Portfolio", path: "/portfolio" },
    { text: "Contact", path: "/contact" },
    { text: "Resume", path: "/resume" }
]

export const Header = () => {
    return (
        <header>
            <Navbar fixed="top" bg="light" expand="lg">
                <Link to="/">
                    <Navbar.Brand>AB</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {routes.map(({ text, path }) => (
                            <Link to={path} key={path}>{text}</Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <h1>Adam Barron</h1>
                <img className="header-img" src={coverImage} alt="blue triangles"></img>
                <nav>
                    {routes.map(({ text, path }) => (
                        <Link to={path} key={path}>{text}</Link>
                    ))}
                </nav> */}
        </header>
    );
}