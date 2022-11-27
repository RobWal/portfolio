import './ProjectsH2.css';

type ProjectsH2Type = {
    text: string,
}

const ProjectsH2 = ({text}: ProjectsH2Type) => {
    return (
        <h1 className="projects-h2">{text}</h1>
    );
};

export default ProjectsH2;