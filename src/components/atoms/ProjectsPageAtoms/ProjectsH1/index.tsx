import './ProjectsH1.css';

type ProjectsH1Type = {
    text: string,
}

const ProjectsH1 = ({text}: ProjectsH1Type) => {
    return (
        <h1 className="projects-h1">{text}</h1>
    );
};

export default ProjectsH1;