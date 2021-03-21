import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const routes = [
    { text: "About", path: "/" },
    { text: "Portfolio", path: "/portfolio" },
    { text: "Contact", path: "/contact" },
    { text: "Resume", path: "/resume" }
]

export const Header = () => {
    return (
        <header>
            <Navbar expand="lg">
                <Link to="/">
                    <Navbar.Brand>Adam Barron</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {routes.map(({ text, path }) => (
                            <Link to={path} key={path} className="navbar-items">{text}</Link>
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