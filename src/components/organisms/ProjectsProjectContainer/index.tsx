import ProjectsProjectDescription from '../../atoms/ProjectsPageAtoms/ProjectsProjectDescription';
import ProjectsProjectImage from '../../atoms/ProjectsPageAtoms/ProjectsProjectImage';
import ProjectsProjectName from '../../atoms/ProjectsPageAtoms/ProjectsProjectName';
import ProjectsProjectTechnicals from '../../atoms/ProjectsPageAtoms/ProjectsProjectTechnicals';
import SocialButton from '../../atoms/SocialButton';
import ProjectsProjectLeftContainer from '../../molecules/ProjectsProjectLeftContainer';
import ProjectsProjectRightContainer from '../../molecules/ProjectsProjectRightContainer ';
import ProjectsProjectSocialContainer from '../../molecules/ProjectsProjectSocialContainer';
import './ProjectsProjectContainer.css';

// interface ProjectsProjectContainerInterface {
//     projectName: string,
//     projectDescription: string,
//     projectImage: string,
//     projectGithubLink: string,
//     projectLiveLink: string,
//     projectInternalLink: string,
//     projectImageAlt: string,
//     projectTechnicals: string,
// };

// const ProjectsProjectContainer = ({projectName, projectDescription, projectImage, projectGithubLink, projectLiveLink, projectInternalLink, projectImageAlt, projectTechnicals}: ProjectsProjectContainerInterface) => {
//     return (
//         <div className="projects-project-container">
//             <ProjectsProjectLeftContainer projectName={projectName} projectDescription={projectDescription} projectGithubLink={projectGithubLink}
//             projectLiveLink={projectLiveLink} projectInternalLink={projectInternalLink} />
//              <ProjectsProjectRightContainer projectImage={projectImage} projectImageAlt={projectImageAlt} projectTechnicals={projectTechnicals} />
//         </div>
//     );
// };

// export default ProjectsProjectContainer;

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
            <ProjectsProjectDescription projectDescription={projectDescription} />
            <ProjectsProjectSocialContainer projectGithubLink={projectGithubLink} projectLiveLink={projectLiveLink} />
            <ProjectsProjectImage projectImage={projectImage} projectImageAlt={projectImageAlt} /> 
            <ProjectsProjectTechnicals projectTechnicals={projectTechnicals} />
        </div>
    );
};

export default ProjectsProjectContainer;