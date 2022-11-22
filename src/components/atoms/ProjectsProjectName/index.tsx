import './ProjectsProjectName.css'

type ProjectName = {
    projectName: string,
}

const ProjectsProjectName = ({projectName}: ProjectName) => {
    return (
        <h1 className="projects-project-name">{projectName}</h1>
    )
}

export default ProjectsProjectName;