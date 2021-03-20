import Container from 'react-bootstrap/Container';

export const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="footer-icons">
                    <a href="https://github.com/barron-a" className="fa fa-github fa-3x"></a>
                    <a href="https://www.linkedin.com/in/adambarron/" className="fa fa-linkedin fa-3x"></a>
                    <a href="https://twitter.com/adambarron" className="fa fa-twitter fa-3x"></a>
                </div>
            </Container>
        </footer>
    );
}