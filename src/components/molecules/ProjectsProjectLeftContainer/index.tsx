import ProjectsProjectDescription from "../../atoms/ProjectsPageAtoms/ProjectsProjectDescription";
import ProjectsProjectImage from "../../atoms/ProjectsPageAtoms/ProjectsProjectImage";
import ProjectsProjectInternalLink from "../../atoms/ProjectsPageAtoms/ProjectsProjectInternalLink";
import ProjectsProjectName from "../../atoms/ProjectsPageAtoms/ProjectsProjectName";
import ProjectsProjectTechnicals from "../../atoms/ProjectsPageAtoms/ProjectsProjectTechnicals";
import ProjectsProjectSocialContainer from "../ProjectsProjectSocialContainer";
import './ProjectsProjectLeftContainer.css'

interface ProjectsProjectLeftContainerInterface {
    projectName: string,
    projectDescription: string,
    projectGithubLink: string,
    projectLiveLink: string,
    projectInternalLink: string,
};

const ProjectsProjectLeftContainer = ({projectName, projectDescription, projectGithubLink, projectLiveLink, projectInternalLink}: ProjectsProjectLeftContainerInterface) => {
    return (
        <div className="projects-project-left-container">
            <ProjectsProjectName projectName={projectName} />
            <ProjectsProjectDescription projectDescription={projectDescription}/>
            <ProjectsProjectInternalLink projectInternalLink={projectInternalLink} projectName={projectName}/>
            <ProjectsProjectSocialContainer projectGithubLink={projectGithubLink} projectLiveLink={projectLiveLink} />
        </div>
    )
}

export default ProjectsProjectLeftContainer;