import ProjectsProjectDescription from "../../atoms/ProjectsPageAtoms/ProjectsProjectDescription";
import ProjectsProjectImage from "../../atoms/ProjectsPageAtoms/ProjectsProjectImage";
import ProjectsProjectInternalLink from "../../atoms/ProjectsPageAtoms/ProjectsProjectInternalLink";
import ProjectsProjectName from "../../atoms/ProjectsPageAtoms/ProjectsProjectName";
import ProjectsProjectTechnicals from "../../atoms/ProjectsPageAtoms/ProjectsProjectTechnicals";
import ProjectsProjectSocialContainer from "../ProjectsProjectSocialContainer";
import './ProjectsProjectRightContainer.css'

interface ProjectsProjectRightContainerInterface {
    projectImage: string,
    projectImageAlt: string,
    projectTechnicals: string,
};

const ProjectsProjectRightContainer = ({projectImageAlt, projectImage, projectTechnicals}: ProjectsProjectRightContainerInterface) => {
    return (
        <div className="projects-project-right-container">
            <ProjectsProjectImage projectImage={projectImage} projectImageAlt={projectImageAlt} />
            <ProjectsProjectTechnicals projectTechnicals={projectTechnicals}/>
        </div>
    )
}

export default ProjectsProjectRightContainer;