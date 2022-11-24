import { Link } from 'react-router-dom';
import './ProjectsProjectInternalLink.css';

type ProjectInternalLink = {
    projectInternalLink: string,
    projectName: string,
};

const ProjectsProjectInternalLink = ({projectInternalLink, projectName}: ProjectInternalLink) => {
    return (
        <p className="projects-project-internal-link-description">For more information about {projectName} - <Link className="projects-project-internal-link" to={projectInternalLink}>click here!</Link></p>
    );
};

export default ProjectsProjectInternalLink;