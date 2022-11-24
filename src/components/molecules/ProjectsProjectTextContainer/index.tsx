import ProjectsProjectDescription from "../../atoms/ProjectsPageAtoms/ProjectsProjectDescription";
import ProjectsProjectInternalLink from "../../atoms/ProjectsPageAtoms/ProjectsProjectInternalLink";
import ProjectsProjectName from "../../atoms/ProjectsPageAtoms/ProjectsProjectName";
import ProjectsProjectSocialContainer from "../ProjectsProjectSocialContainer";
import './ProjectsProjectTextContainer.css'

interface ProjectsProjectContainerInterface {
    projectName: string,
    projectDescription: string,
    projectGithubLink: string,
    projectLiveLink: string,
    projectInternalLink: string,
};

const ProjectsProjectTextContainer = ({projectName, projectDescription, projectGithubLink, projectLiveLink, projectInternalLink}: ProjectsProjectContainerInterface) => {
    return (
        <div className="projects-project-text-container">
            <ProjectsProjectName projectName={projectName} />
            <ProjectsProjectDescription projectDescription={projectDescription}/>
            <ProjectsProjectInternalLink projectInternalLink={projectInternalLink} projectName={projectName}/>
            <ProjectsProjectSocialContainer projectGithubLink={projectGithubLink} projectLiveLink={projectLiveLink} />
        </div>
    )
}

export default ProjectsProjectTextContainer;