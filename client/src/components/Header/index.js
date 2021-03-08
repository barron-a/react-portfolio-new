import { Link } from 'react-router-dom';

const routes = [
    { text: "About", path: "/" },
    { text: "Portfolio", path: "/portfolio" },
    { text: "Contact", path: "/contact" },
    { text: "Resume", path: "/resume"}
]

export const Header = () => {
    return (
        <nav>
            {routes.map(({ text, path }) => (
                <Link to={path} key={path}>{text}</Link>
            ))}
        </nav>
    );
}