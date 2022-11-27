import { Link } from 'react-router-dom';
import H1 from '../../atoms/H1';
import ProjectsH1 from '../../atoms/ProjectsPageAtoms/ProjectsH1';
import ProjectsH2 from '../../atoms/ProjectsPageAtoms/ProjectsH2';
import ProjectsProjectContainer from '../../organisms/ProjectsProjectContainer';
import './Projects.css'

const Projects = () => {
    return (
        <div className="projects">
            <ProjectsH1 text={`Welcome to my projects page`} />
            <ProjectsH2 text={`A more complete, more detailed list of what I've worked on`} />
            <ProjectsProjectContainer projectName={`Deep Sea Adventure`} 
            projectDescription={`Deep Sea Adventure is a board game I've played many times with friends, but during the pandemic it became impossible to enjoy, so I attempted to recreate it online
            so that we could enjoy it, no matter the distance between us.`} 
            projectTechnicals={`Deep Sea Adventure is a board game I've played many times with friends, but during the pandemic it became impossible to enjoy, so I attempted to recreate it online
            so that we could enjoy it, no matter the distance between us.`} 
            projectImage={`/images/featuredDeepSeaAdventure.png`} projectImageAlt={'Deep Sea Adventure Tools Alternate'} projectGithubLink={`https://github.com/RobWal/deep-sea-adventure`} 
            projectLiveLink={`https://deep-see-adventure.herokuapp.com/`} projectInternalLink={`/projects/deep-sea-adventure`} />
            
            <ProjectsProjectContainer projectName={`Stardew Valley Tools`} 
            projectDescription={`Stardew Valley Tools is a work-in-progress passion project I started after falling in love with the game by the same name. What started as an excel spreadsheet
            will be made available for everyone to make their playthroughs just that little bit more enjoyable.`} 
            projectTechnicals={`Deep Sea Adventure is a board game I've played many times with friends, but during the pandemic it became impossible to enjoy, so I attempted to recreate it online
            so that we could enjoy it, no matter the distance between us.`} 
            projectImage={`/images/featuredStardewValleyTools.png`} projectImageAlt={'Stardew Valley Tools Alternate'} projectGithubLink={`https://github.com/RobWal/stardew-valley-tools`} 
            projectLiveLink={`https://RobWal.github.io`} projectInternalLink={`/projects/stardew-valley-tools`} />

            <ProjectsProjectContainer projectName={`Okay Bloomer`} 
            projectDescription={`Okay Bloomer is a project designed to help bring the crucial life or death information, like how often to water or how much sun a plant needs, to beginner 
            gardeners who don't know a philadendron from a pothos.`} 
            projectTechnicals={`Deep Sea Adventure is a board game I've played many times with friends, but during the pandemic it became impossible to enjoy, so I attempted to recreate it online
            so that we could enjoy it, no matter the distance between us.`} 
            projectImage={`/images/featuredOkayBloomer.png`} projectImageAlt={'Okay Bloomer Alternate'} projectGithubLink={`https://github.com/RobWal/okay-bloomer`} 
            projectLiveLink={`https://okay-bloomer.herokuapp.com/`} projectInternalLink={`/projects/okay-bloomer`} />
            
            <ProjectsProjectContainer projectName={`Jaunt`} 
            projectDescription={`Jaunt began in the passion for table top role playing games, in the mind of a friend of mine. This website aimed to make Jaunt character creation and some of 
            the rules more widely available to further streamline the TTRPG experience`} 
            projectTechnicals={`Deep Sea Adventure is a board game I've played many times with friends, but during the pandemic it became impossible to enjoy, so I attempted to recreate it online
            so that we could enjoy it, no matter the distance between us.`} 
            projectImage={`/images/featuredJaunt.png`} projectImageAlt={'Jaunt Alternate'} projectGithubLink={`https://github.com/RobWal/Jaunt-website`} 
            projectLiveLink={`https://jaunt-website.herokuapp.com/home`} projectInternalLink={`/projects/jaunt`} />
            
            <ProjectsProjectContainer projectName={`Tic Tac Toe`} 
            projectDescription={`Tic Tac Toe is a nod to my humble beginnings as a developer, it consists of only the most sophisticated HTML, CSS, and yes, even JavaScript!`} 
            projectTechnicals={`Deep Sea Adventure is a board game I've played many times with friends, but during the pandemic it became impossible to enjoy, so I attempted to recreate it online
            so that we could enjoy it, no matter the distance between us.`} 
            projectImage={`/images/featuredTicTacToe.png`} projectImageAlt={'Tic Tac Toe Alternate'} projectGithubLink={`https://github.com/RobWal/TicTacToe`} 
            projectLiveLink={`https://robwal.github.io/TicTacToe/`} projectInternalLink={`/projects/tic-tac-toe`} /> 
        </div>
    )
}

export default Projects;