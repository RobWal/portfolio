import HomepageFeaturedTechStack from '../../atoms/HomePageAtoms/HomepageFeaturedTechStack';
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
    projectTechStack: ProjectTechStackType[],
}


type ProjectTechStackType = {
    "key": string, 
    "imageSource": string,
}

const ProjectsProjectContainer = ({projectName, projectDescription, projectImage, projectGithubLink, projectLiveLink, projectId, projectImageAlt, projectTechnicals, projectTechStack}: ProjectsProjectContainerInterface) => {
    return (
        <div id={projectId} className="projects-project-container" >
            <ProjectsProjectName projectName={projectName} />
            <ProjectsProjectImage projectImage={projectImage} projectImageAlt={projectImageAlt} /> 
            <ProjectsProjectDescription projectDescription={projectDescription} />
            <HomepageFeaturedTechStack projectTechStack = {projectTechStack}  />
            <ProjectsProjectTechnicals projectTechnicals={projectTechnicals} />
            <ProjectsProjectSocialContainer projectGithubLink={projectGithubLink} projectLiveLink={projectLiveLink} />
        </div>
    );
};

export default ProjectsProjectContainer;