export const ProjectCard = ({ title, deployed, github }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{deployed}</p>
            <p>{github}</p>
        </div>
    )
}