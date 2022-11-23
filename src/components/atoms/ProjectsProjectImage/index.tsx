import './ProjectsProjectImage.css';

type ProjectImage = {
    projectImage: string,
    projectImageAlt: any,
};

const ProjectsProjectImage = ({projectImage, projectImageAlt}: ProjectImage) => {
    return (
        <img className="projects-project-image" src={projectImage} alt={projectImageAlt}></img>
    );
};

export default ProjectsProjectImage;