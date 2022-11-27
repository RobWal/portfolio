import ProjectsProjectDescription from "../../atoms/ProjectsPageAtoms/ProjectsProjectDescription";
import ProjectsProjectImage from "../../atoms/ProjectsPageAtoms/ProjectsProjectImage";
import ProjectsProjectInternalLink from "../../atoms/ProjectsPageAtoms/ProjectsProjectInternalLink";
import ProjectsProjectName from "../../atoms/ProjectsPageAtoms/ProjectsProjectName";
import ProjectsProjectTechnicals from "../../atoms/ProjectsPageAtoms/ProjectsProjectTechnicals";
import ProjectsProjectSocialContainer from "../ProjectsProjectSocialContainer";
import './ProjectsProjectTextContainer.css'

interface ProjectsProjectContainerInterface {
    projectName: string,
    projectDescription: string,
    projectGithubLink: string,
    projectLiveLink: string,
    projectInternalLink: string,
    projectImage: string,
    projectImageAlt: string,
    projectTechnicals: string,
};

const ProjectsProjectTextContainer = ({projectName, projectDescription, projectGithubLink, projectLiveLink, projectInternalLink, projectImageAlt, projectImage, projectTechnicals}: ProjectsProjectContainerInterface) => {
    return (
        <div className="projects-project-text-container">
            <ProjectsProjectName projectName={projectName} />
            <ProjectsProjectDescription projectDescription={projectDescription}/>
            <ProjectsProjectInternalLink projectInternalLink={projectInternalLink} projectName={projectName}/>
            <ProjectsProjectSocialContainer projectGithubLink={projectGithubLink} projectLiveLink={projectLiveLink} />
            <ProjectsProjectImage projectImage={projectImage} projectImageAlt={projectImageAlt} />
            <ProjectsProjectTechnicals projectTechnicals={projectTechnicals}/>
        </div>
    )
}

export default ProjectsProjectTextContainer;