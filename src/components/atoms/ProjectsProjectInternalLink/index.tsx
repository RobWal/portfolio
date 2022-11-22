import { Link } from 'react-router-dom';
import './ProjectsProjectInternalLink.css'

type ProjectInternalLink = {
    projectInternalLink: string,
}

const ProjectsProjectInternalLink = ({projectInternalLink}: ProjectInternalLink) => {
    return (
        <p className="projects-project-internal-link">For more information, click <Link to={projectInternalLink}>here!</Link></p>
    )
}

export default ProjectsProjectInternalLink;