import ProjectsProjectDescription from '../../atoms/ProjectsProjectDescription';
import ProjectsProjectImage from '../../atoms/ProjectsProjectImage';
import ProjectsProjectInternalLink from '../../atoms/ProjectsProjectInternalLink';
import ProjectsProjectName from '../../atoms/ProjectsProjectName';
import SocialButton from '../../atoms/SocialButton';
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
            <div className="other-half">
                <ProjectsProjectName projectName={projectName} />
                <ProjectsProjectDescription projectDescription={projectDescription}/>
                <ProjectsProjectInternalLink projectInternalLink={projectInternalLink}/>
                <div className="two-socials">
                    <SocialButton fileName={'/images/gitIcon.png'} link={projectGithubLink} alternate={'Github Link'} />
                    <SocialButton fileName={'/images/eyeIcon.png'} link={projectLiveLink} alternate={'Live Link'} />
                </div>
            </div>
            <ProjectsProjectImage projectImage={projectImage} />
        </div>
    );
};

export default ProjectsProjectContainer;