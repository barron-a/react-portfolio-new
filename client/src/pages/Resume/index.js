import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Pdf from './Adam Barron Resume_March 2021.pdf'

export const Resume = () => {
    return (
        <Container>
            <h1 className="resume-header">
                Resume
            </h1>
            <div className="resume-download">
                <a href = {Pdf} target = "_blank">View and Download Resume</a>
            </div>
            <div className="proficiencies-header">
                <h1>
                    Proficiencies
                </h1>
            </div>
            <div>
                <ul className="prof-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>APIs</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>Progressive Web Apps</li>
                    <li>React</li>
                    <li>GraphQL</li>
                    <li>Apollo Server</li>
                </ul>
            </div>
        </Container>
    )
}