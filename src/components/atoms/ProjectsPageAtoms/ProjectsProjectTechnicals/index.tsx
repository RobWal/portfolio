import './ProjectsProjectTechnicals.css';

type ProjectTechnicalsType = {
    projectTechnicals: string,
};

const ProjectsProjectTechnicals = ({projectTechnicals}: ProjectTechnicalsType) => {
    return (
        <p className="projects-project-technicals">{projectTechnicals}</p>
    );
};

export default ProjectsProjectTechnicals;