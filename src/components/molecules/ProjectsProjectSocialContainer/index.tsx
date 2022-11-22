import SocialButton from '../../atoms/SocialButton';
import './ProjectsProjectSocialContainer.css';

interface ProjectsProjectSocialContainer {
    projectGithubLink: string,
    projectLiveLink: string,
};


const ProjectsProjectSocialContainer = ({projectGithubLink, projectLiveLink}: ProjectsProjectSocialContainer) => {
    return (
        <div className="projects-project-social-container">
            <SocialButton fileName={'/images/gitIcon.png'} link={projectGithubLink} alternate={'Github Link'} />
            <SocialButton fileName={'/images/eyeIcon.png'} link={projectLiveLink} alternate={'Live Link'} />
        </div>
    )
}

export default ProjectsProjectSocialContainer;