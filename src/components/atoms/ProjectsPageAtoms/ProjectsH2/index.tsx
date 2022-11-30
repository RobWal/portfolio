import './ProjectsH2.css';

type ProjectsH2Type = {
    text: string,
}

const ProjectsH2 = ({text}: ProjectsH2Type) => {
    return (
        <h2 className="projects-h2">{text}</h2>
    );
};

export default ProjectsH2;