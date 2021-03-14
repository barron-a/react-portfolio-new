import React from 'react';
import photo from '../../assets/cover-image/about-me-img.jpg';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';

export const About = () => {
    return (
        <Container fluid="md">
            <Row className="justify-content-md-center">
            <h1>About Me</h1>
            </Row>
            <Row className="justify-content-md-center">
            <Figure>
                <Figure.Image
                    width={315}
                    height={400}
                    alt="Adam Barron Portrait"
                    src={photo}
                />
                <Figure.Caption>
                    Adam Barron Bio
                </Figure.Caption>
            </Figure>
            </Row>
        </Container>
    ) 
}