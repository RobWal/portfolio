import { Link } from 'react-router-dom';
import './Projects.css'

const Projects = () => {
    return (
        <div className="projects">
            <h1>This is the project-information page</h1>
            <Link to="/projects/deep-sea-adventure"><p>Deep Sea Adventure</p></Link>
            <Link to="/projects/okay-bloomer"><p>Okay Bloomer</p></Link>
            <Link to="/projects/jaunt"><p>Jaunt</p></Link>
            <Link to="/projects/tic-tac-toe"><p>Tic Tac Toe</p></Link>
            {/* <Link to="/projects/stardew-valley-fishing"><p>Stardew Fishing</p></Link> */}
        </div>
    )
}

export default Projects;