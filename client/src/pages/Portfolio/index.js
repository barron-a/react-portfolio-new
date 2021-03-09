import { ProjectCard } from "../../components/ProjectCard"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import getawayPhoto from '../../assets/project-images/getaway.png';
import daySpaPhoto from '../../assets/project-images/day-spa.png';
import techBlogPhoto from '../../assets/project-images/tech-blog.png';
import workdayPhoto from '../../assets/project-images/work-day-scheduler.png';
import weatherPhoto from '../../assets/project-images/weather-dashboard.png';
import noteTakerPhoto from '../../assets/project-images/notetaker.png';

const projects = [
    {
        name: "Getaway",
        deployed: "https://barron-a.github.io/getaway/",
        github: "https://github.com/barron-a/getaway",
        photo: getawayPhoto
    },
    {
        name: "Day Spa",
        deployed: "https://dry-mountain-60898.herokuapp.com/",
        github: "https://github.com/natashamullin/we_are_back",
        photo: daySpaPhoto
    },
    {
        name: "Tech Blog",
        deployed: "https://hidden-atoll-13402.herokuapp.com/",
        github: "https://github.com/barron-a/tech-blog",
        photo: techBlogPhoto
    },
    {
        name: "Work Day Scheduler",
        deployed: "https://barron-a.github.io/work-day-scheduler/",
        github: "https://github.com/barron-a/work-day-scheduler",
        photo: workdayPhoto
    },
    {
        name: "Weather Dashboard",
        deployed: "https://barron-a.github.io/weather-dashboard/",
        github: "https://github.com/barron-a/weather-dashboard",
        photo: weatherPhoto
    },
    {
        name: "Notetaker",
        deployed: "https://young-brook-05816.herokuapp.com/",
        github: "https://github.com/barron-a/note-taker",
        photo: noteTakerPhoto
    }
]

export const Portfolio = () => {
    return (
        <Container>
            <h1>Portfolio</h1>
            {
                projects.map(({ photo, name, deployed, github }) => (
                    // <ProjectCard key={name}>
                        <Card 
                            key={name}
                            className="mb-4"
                        >
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {deployed} <br />
                                    {github}
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="top"
                                src={photo} />
                        </Card>
                    // </ProjectCard>
                ))
            }
        </Container>
    )
}