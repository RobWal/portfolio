import './Projects.css';
import UseHashFragment from '../../../functions/UseHashFragment';
import ProjectsH1 from '../../atoms/ProjectsPageAtoms/ProjectsH1';
import ProjectsH2 from '../../atoms/ProjectsPageAtoms/ProjectsH2';
import ProjectsProjectContainer from '../../organisms/ProjectsProjectContainer';

const Projects = () => {


    UseHashFragment();

    return (
        <div className="projects">
            <ProjectsH1 text={`Welcome to my projects page!`} />
            <ProjectsH2 text={`The following are some of the projects I've worked on.`} />

{/* Technologies used - HTML, CSS, React, TypeScript, Node.js, Heroku, following atomic design methodology.  */}

            <ProjectsProjectContainer projectName={`Deep Sea Adventure`} 
            projectDescription={`This project was created to allow friends to play Deep Sea Adventure anytime, even during a pandemic. Learning how to recreate a gamestate in a browser with React was amazing and very rewarding.`} 
            projectTechStack={[
                {"key": "HTML", "imageSource": "/images/techStack/HTMLIcon.svg"},
                {"key": "CSS", "imageSource": "/images/techStack/CSSIcon.svg"},
                {"key": "JavaScript", "imageSource": "/images/techStack/javaScriptIcon.svg"},
                {"key": "React", "imageSource": "/images/techStack/reactIcon.svg"},
                {"key": "TypeScript", "imageSource": "/images/techStack/typeScriptIcon.svg"},
            ]}
            projectTechnicals={`What's next: 
-Expand on the number of rounds
-Add virtual rooms for players to host and join
-Add WebSockets`}
            projectImage={`/images/featuredDeepSeaAdventure.png`} projectImageAlt={'Deep Sea Adventure Tools Alternate'} projectGithubLink={`https://github.com/RobWal/deep-sea-adventure`} 
            projectLiveLink={`https://deep-sea-adventure.onrender.com/`} projectId={`deep-sea-adventure`} />
            


{/* Technologies used - HTML, CSS, Javascript, Node.js, Postgres, TailwindCSS, Heroku */}

            <ProjectsProjectContainer projectName={`Okay Bloomer`} 
            projectDescription={`This project is designed to help bring critical information to budding gardeners who don't know a philadendron from a pothos.
            Users are able to create an account to 'favourite' particular plants, granting them easy access to things like how often to water, what kind of sun it needs and how often to re pot.`} 
            projectTechStack={[
                {"key": "HTML", "imageSource": "/images/techStack/HTMLIcon.svg"},
                {"key": "CSS", "imageSource": "/images/techStack/CSSIcon.svg"},
                {"key": "JavaScript", "imageSource": "/images/techStack/javaScriptIcon.svg"},
                {"key": "Node.js", "imageSource": "/images/techStack/nodejsIcon.svg"},
                // {"key": "React", "imageSource": "/images/techStack/reactIcon.svg"},
                {"key": "PostgreSQL", "imageSource": "/images/techStack/postgreSQLIcon.svg"},
            ]}
            projectTechnicals={`What's next:
-Expand the database
-Allow 'Super User' accounts to add information
-Create image database
-Allow smoother site navigation`} 
            projectImage={`/images/featuredOkayBloomer.png`} projectImageAlt={'Okay Bloomer Alternate'} projectGithubLink={`https://github.com/RobWal/okay-bloomer`} 
            projectLiveLink={`https://okay-bloomer.onrender.com/`} projectId={`okay-bloomer`} />

            
            {/* `Technologies used: HTML, CSS, JavaScript, Python, Flask, Postgres, Jinja Templates. */}
            
            <ProjectsProjectContainer projectName={`Jaunt`} 
            projectDescription={`Table Top Role Playing Games (TTRPG'S) can be difficult to learn and to use, this application aims to help teach newer players some rules and to play around with character creation.`} 
            projectTechStack={[
                {"key": "HTML", "imageSource": "/images/techStack/HTMLIcon.svg"},
                {"key": "CSS", "imageSource": "/images/techStack/CSSIcon.svg"},
                {"key": "JavaScript", "imageSource": "/images/techStack/javaScriptIcon.svg"},
                {"key": "Python", "imageSource": "/images/techStack/pythonIcon.svg"},
                {"key": "Flask", "imageSource": "/images/techStack/flaskIcon.svg"},
                {"key": "PostgreSQL", "imageSource": "/images/techStack/postgreSQLIcon.svg"},
            ]}
            projectTechnicals={`What's next: 
Jaunt is on hold until it's further along the development cycle to allow for more stable implementation`} 
            projectImage={`/images/featuredJaunt.png`} projectImageAlt={'Jaunt Alternate'} projectGithubLink={`https://github.com/RobWal/Jaunt-website`} 
            projectLiveLink={`https://jaunt.onrender.com/home`} projectId={`jaunt`} />

            {/* Technologies used - HTML, CSS, React, TypeScript. */}

            <ProjectsProjectContainer projectName={`Stardew Valley Tools`} 
            projectDescription={`This is a work in progress aimed at helping SDV players navigate the complictated, yet mostly predictable SDV world.`} 
            projectTechStack={[
                {"key": "HTML", "imageSource": "/images/techStack/HTMLIcon.svg"},
                {"key": "CSS", "imageSource": "/images/techStack/CSSIcon.svg"},
                {"key": "JavaScript", "imageSource": "/images/techStack/javaScriptIcon.svg"},
                {"key": "React", "imageSource": "/images/techStack/reactIcon.svg"},
                {"key": "TypeScript", "imageSource": "/images/techStack/typeScriptIcon.svg"},
            ]}
            projectTechnicals={`What's next:
-Design a clean phone UI for better UX
-Complete "Fishing Odds!" functionality
-Complete the remaining tools
-Add a dynamic mine/caverns map generator`}
            projectImage={`/images/featuredPlaceholder.png`} projectImageAlt={'Stardew Valley Tools Alternate'} projectGithubLink={`https://github.com/RobWal/stardew-valley-tools`} 
            projectLiveLink={`https://RobWal.github.io`} projectId={`stardew-valley-tools`} />
            
{/* `Technologies used: HTML, CSS, Javascript*/}


            <ProjectsProjectContainer projectName={`Tic Tac Toe`} 
            projectDescription={`Tic Tac Toe is a nod to my humble beginnings as a developer, illustrating my appreciation for light colours and rounded fonts.`} 
            projectTechStack={[
                {"key": "HTML", "imageSource": "/images/techStack/HTMLIcon.svg"},
                {"key": "CSS", "imageSource": "/images/techStack/CSSIcon.svg"},
                {"key": "JavaScript", "imageSource": "/images/techStack/javaScriptIcon.svg"},
            ]}
            projectTechnicals={`What's next:
Tic Tac Toe development has finished, I don't see any changes being made at this point as there are more interesting and powerful technologies to practice that are taking priority.`} 
            projectImage={`/images/featuredTicTacToe.png`} projectImageAlt={'Tic Tac Toe Alternate'} projectGithubLink={`https://github.com/RobWal/TicTacToe`} 
            projectLiveLink={`https://tic-tac-toe-p9mu.onrender.com/`} projectId={`tic-tac-toe`} /> 
            <ProjectsH1 text={`Like what you see?`} />
            <ProjectsH1 text={`Get in touch!`} />
        </div>
    )
}

export default Projects;