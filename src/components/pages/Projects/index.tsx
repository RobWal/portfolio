import { Link } from 'react-router-dom';
import ProjectsProjectContainer from '../../organisms/ProjectsProjectContainer';
import './Projects.css'

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <ProjectsProjectContainer projectName={`Deep Sea Adventure`} 
            projectDescription={`This is a description of Deep Sea Adventure, I haven't got aything at the moment but I assure you when I do it'll be all over for you folks`} 
            projectImage={`/images/featuredDeepSeaAdventure.png`} projectImageAlt={'Deep Sea Adventure Tools Alternate'} projectGithubLink={`https://github.com/RobWal/deep-sea-adventure`} 
            projectLiveLink={`href="https://deep-see-adventure.herokuapp.com/"`} projectInternalLink={`/projects/deep-sea-adventure`} />
            
            <ProjectsProjectContainer projectName={`Stardew Valley Tools`} 
            projectDescription={`This is a description of Stardew Valley Tools`} 
            projectImage={`/images/featuredStardewValleyTools.png`} projectImageAlt={'Stardew Valley Tools Alternate'} projectGithubLink={`https://github.com/RobWal/stardew-valley-tools`} 
            projectLiveLink={`href="https://RobWal.github.io"`} projectInternalLink={`/projects/stardew-valley-tools`} />

            <ProjectsProjectContainer projectName={`Okay Bloomer`} 
            projectDescription={`This is a description of Okay Bloomer`} 
            projectImage={`/images/featuredOkayBloomer.png`} projectImageAlt={'Okay Bloomer Alternate'} projectGithubLink={`https://github.com/RobWal/okay-bloomer`} 
            projectLiveLink={`href="https://okay-bloomer.herokuapp.com/"`} projectInternalLink={`/projects/okay-bloomer`} />
            
            <ProjectsProjectContainer projectName={`Jaunt`} 
            projectDescription={`This is a description of Jaunt`} 
            projectImage={`/images/featuredJaunt.png`} projectImageAlt={'Jaunt Alternate'} projectGithubLink={`https://github.com/RobWal/jaunt`} 
            projectLiveLink={`href="https://jaunt.herokuapp.com/"`} projectInternalLink={`/projects/jaunt`} />
            
            <ProjectsProjectContainer projectName={`Tic Tac Toe`} 
            projectDescription={`This is a description of Tic Tac Toe`} 
            projectImage={`/images/featuredTicTacToe.png`} projectImageAlt={'Tic Tac Toe Alternate'} projectGithubLink={`https://github.com/RobWal/tic-tac-toe`} 
            projectLiveLink={`href="https://tic-tac-toe.herokuapp.com/"`} projectInternalLink={`/projects/tic-tac-toe`} /> 
        </div>
    )
}

export default Projects;