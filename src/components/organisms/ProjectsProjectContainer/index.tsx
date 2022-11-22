import ProjectsProjectDescription from '../../atoms/ProjectsProjectDescription';
import ProjectsProjectImage from '../../atoms/ProjectsProjectImage';
import ProjectsProjectInternalLink from '../../atoms/ProjectsProjectInternalLink';
import ProjectsProjectName from '../../atoms/ProjectsProjectName';
import SocialButton from '../../atoms/SocialButton';
import ProjectsProjectTextContainer from '../../molecules/ProjectsProjectTextContainer';
import './ProjectsProjectContainer.css'

interface ProjectsProjectContainerInterface {
    projectName: string,
    projectDescription: string,
    projectImage: string,
    projectGithubLink: string,
    projectLiveLink: string,
    projectInternalLink: string,
};

const ProjectsProjectContainer = ({projectName, projectDescription, projectImage, projectGithubLink, projectLiveLink, projectInternalLink}: ProjectsProjectContainerInterface) => {
    return (
        <div className="projects-project-container">
            <ProjectsProjectTextContainer projectName={projectName} projectDescription={projectDescription} projectImage={projectImage} projectGithubLink={projectGithubLink}
             projectLiveLink={projectLiveLink} projectInternalLink={projectInternalLink} />
            <ProjectsProjectImage projectImage={projectImage} />
        </div>
    );
};

export default ProjectsProjectContainer;