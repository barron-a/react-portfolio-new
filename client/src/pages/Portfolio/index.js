import { ProjectCard } from "../../components/ProjectCard"

const projects = [
    {
        name: "Getaway",
        deployed: "https://barron-a.github.io/getaway/",
        github: "https://github.com/barron-a/getaway"
    },
    {
        name: "Day Spa",
        deployed: "https://dry-mountain-60898.herokuapp.com/",
        github: "https://github.com/natashamullin/we_are_back"
    },
    {
        name: "Tech Blog",
        deployed: "https://hidden-atoll-13402.herokuapp.com/",
        github: "https://github.com/barron-a/tech-blog"
    },
    {
        name: "Work Day Scheduler",
        deployed: "https://barron-a.github.io/work-day-scheduler/",
        github: "https://github.com/barron-a/work-day-scheduler"
    },
    {
        name: "Weather Dashboard",
        deployed: "https://barron-a.github.io/weather-dashboard/",
        github: "https://github.com/barron-a/weather-dashboard"
    },
    {
        name: "Notetaker",
        deployed: "https://young-brook-05816.herokuapp.com/",
        github: "https://github.com/barron-a/note-taker"
    }
]

export const Portfolio = () => {
    return (
        <>
            <h1>This is our portfolio page</h1>
            {
                projects.map(({ name, deployed, github }) => (
                    <ProjectCard key={name} title={name} deployed={deployed} github={github} />
                ))
            }
        </>
    )
}