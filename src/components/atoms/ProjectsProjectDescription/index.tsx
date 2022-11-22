import './ProjectsProjectDescription.css'

type ProjectDescription = {
    projectDescription: string,
}

const ProjectsProjectDescription = ({projectDescription}: ProjectDescription) => {
    return (
        <p className="projects-project-description">{projectDescription}</p>
    )
}

export default ProjectsProjectDescription;