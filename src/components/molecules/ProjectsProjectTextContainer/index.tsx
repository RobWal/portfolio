import ProjectsProjectDescription from "../../atoms/ProjectsProjectDescription";
import ProjectsProjectInternalLink from "../../atoms/ProjectsProjectInternalLink";
import ProjectsProjectName from "../../atoms/ProjectsProjectName";
import SocialButton from "../../atoms/SocialButton";
import ProjectsProjectSocialContainer from "../ProjectsProjectSocialContainer";
import './ProjectsProjectTextContainer.css'

interface ProjectsProjectContainerInterface {
    projectName: string,
    projectDescription: string,
    projectImage: string,
    projectGithubLink: string,
    projectLiveLink: string,
    projectInternalLink: string,
};

const ProjectsProjectTextContainer = ({projectName, projectDescription, projectImage, projectGithubLink, projectLiveLink, projectInternalLink}: ProjectsProjectContainerInterface) => {
    return (
        <div className="projects-project-text-container">
            <ProjectsProjectName projectName={projectName} />
            <ProjectsProjectDescription projectDescription={projectDescription}/>
            <ProjectsProjectInternalLink projectInternalLink={projectInternalLink}/>
            <ProjectsProjectSocialContainer projectGithubLink={projectGithubLink} projectLiveLink={projectLiveLink} />
        </div>
    )
}

export default ProjectsProjectTextContainer;