import ProjectsProjectDescription from '../../atoms/ProjectsPageAtoms/ProjectsProjectDescription';
import ProjectsProjectImage from '../../atoms/ProjectsPageAtoms/ProjectsProjectImage';
import ProjectsProjectName from '../../atoms/ProjectsPageAtoms/ProjectsProjectName';
import ProjectsProjectTechnicals from '../../atoms/ProjectsPageAtoms/ProjectsProjectTechnicals';
import ProjectsProjectSocialContainer from '../../molecules/ProjectsProjectSocialContainer';
import './ProjectsProjectContainer.css';

interface ProjectsProjectContainerInterface {
    projectName: string,
    projectDescription: string,
    projectImage: string,
    projectGithubLink: string,
    projectLiveLink: string,
    projectId: string,
    projectImageAlt: string,
    projectTechnicals: string,
};

const ProjectsProjectContainer = ({projectName, projectDescription, projectImage, projectGithubLink, projectLiveLink, projectId, projectImageAlt, projectTechnicals}: ProjectsProjectContainerInterface) => {
    return (
        <div id={projectId} className="projects-project-container" >
            <ProjectsProjectName projectName={projectName} />
            <ProjectsProjectImage projectImage={projectImage} projectImageAlt={projectImageAlt} /> 
            <ProjectsProjectDescription projectDescription={projectDescription} />
            <ProjectsProjectTechnicals projectTechnicals={projectTechnicals} />
            <ProjectsProjectSocialContainer projectGithubLink={projectGithubLink} projectLiveLink={projectLiveLink} />
        </div>
    );
};

export default ProjectsProjectContainer;