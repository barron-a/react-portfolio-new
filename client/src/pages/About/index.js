import React from 'react';
import photo from '../../assets/cover-image/about-me-img.jpg';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';

export const About = () => {
    return (
        <Container fluid="md">
            <Row className="justify-content-center">
                <h1>About Me</h1>
            </Row>
            <Row>
                <Figure>
                    <Figure.Image
                        className="rounded mx-auto d-block"
                        width={315}
                        height={400}
                        alt="Adam Barron Portrait"
                        src={photo}
                    />
                    <Figure.Caption className="text-left">
                        My name is Adam Barron, and I am currently working at Apple as a technician supervisor. My education and career have led me down a variety of paths including Industrial Design, Technology, and Management. In an effort to broaden my skills, I am now taking part in a full-stack coding bootcamp.
                        <br />
                        <br />
                        In my free time, I enjoy listening to music, going to concerts and movies, spending time with family and friends, reading, learning about technology, and traveling whenever possible. I'm looking forward to new adventures in both my personal and professional life!
                    </Figure.Caption>
                </Figure>
            </Row>
        </Container>
    )
}