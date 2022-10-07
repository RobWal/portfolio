import { NavLink } from 'react-router-dom';
import './ProjectInformation.css'

const ProjectInformation = () => {
    return (
        <div className="project-information">
            <h1>This is the project-information page</h1>
            <NavLink to="/projects/stardew-valley-fishing"><p>Stardew Fishing</p></NavLink>
        </div>
    )
}

export default ProjectInformation;