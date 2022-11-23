import './ProjectsProjectImage.css';

type ProjectImage = {
    projectImage: string,
};

const ProjectsProjectImage = ({projectImage}: ProjectImage) => {
    return (
        <img className="projects-project-image" src={projectImage} alt=''></img>
    );
};

export default ProjectsProjectImage;