import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UseHashFragment from '../../../functions/UseHashFragment';
import H1 from '../../atoms/H1';
import ProjectsH1 from '../../atoms/ProjectsPageAtoms/ProjectsH1';
import ProjectsH2 from '../../atoms/ProjectsPageAtoms/ProjectsH2';
import ProjectsProjectContainer from '../../organisms/ProjectsProjectContainer';
import './Projects.css'

const Projects = () => {


    UseHashFragment();

    return (
        <div className="projects">
            <ProjectsH1 text={`Welcome to my projects page!`} />
            <ProjectsH2 text={`The following are some of the projects I've worked on.`} />


            <ProjectsProjectContainer projectName={`Deep Sea Adventure`} 
            projectDescription={`Deep Sea Adventure is a board game I've played many times with friends, but during the pandemic it became impossible to enjoy, so I attempted to recreate it online
            so that we could enjoy it, no matter the distance between us. This proved more difficult than anticipated.`} 
            projectTechnicals={`Technologies used - HTML, CSS, React, TypeScript, Node.js, Heroku, following atomic design methodology. 

This project was intended to push my React boundaries within a two week time limit, which it absolutely did. The initial scope included a back end with websockets that would allow people to log in and play with friends online, but recreating all of the visual assets and fleshing out the code structure (an ongoing endeavour as unforseen limitations came up) for the game took longer than anticipated, shrinking the project scope. 

The end product is a single round, single player game, though there are plans to refactor and expand on the existing code.`} 
            projectImage={`/images/featuredDeepSeaAdventure.png`} projectImageAlt={'Deep Sea Adventure Tools Alternate'} projectGithubLink={`https://github.com/RobWal/deep-sea-adventure`} 
            projectLiveLink={`https://deep-see-adventure.herokuapp.com/`} projectId={`deep-sea-adventure`} />
            
            <ProjectsProjectContainer projectName={`Stardew Valley Tools`} 
            projectDescription={`Stardew Valley Tools is a work-in-progress passion project I recently began after falling in love with the game of the same name. What started as an excel spreadsheet
            will be made available for everyone to make their playthroughs just that little bit more enjoyable.`} 
            projectTechnicals={`Technologies used - HTML, CSS, React, TypeScript.

My goals for this website are fairly large at this point, the immediate focus is creating a user-friendly front end, styled in the beautiful Stardew pixel theme, allowing users to easily work out where they should go for the best results, whether it's money, experience or completing quests.`} 
            projectImage={`/images/featuredPlaceholder.png`} projectImageAlt={'Stardew Valley Tools Alternate'} projectGithubLink={`https://github.com/RobWal/stardew-valley-tools`} 
            projectLiveLink={`https://RobWal.github.io`} projectId={`stardew-valley-tools`} />

            <ProjectsProjectContainer projectName={`Okay Bloomer`} 
            projectDescription={`Okay Bloomer is a project designed to help bring crucial life or death information to beginner gardeners who don't know a philadendron from a pothos.
            Users are able to create an account to 'favourite' particular plants, granting them easy access to things like how often to water, what kind of sun it needs and how often to re pot.`} 
            projectTechnicals={`Technologies used - HTML, CSS, Javascript, Node.js, Postgres, TailwindCSS, Heroku.
            
Working alongside three others in this CRUD application proved to be quite challenging, given that we knew very little about gardening. Thinking through what kind of information would be necessary, how to structure the data and how users would navigate it was quite time consuming. Grand plans were soon ihibited by a lack of freely available databases with information that was consistent both in categories and whether the category had data, making manual data entry for the database the first and most difficult pivot.`} 
            projectImage={`/images/featuredOkayBloomer.png`} projectImageAlt={'Okay Bloomer Alternate'} projectGithubLink={`https://github.com/RobWal/okay-bloomer`} 
            projectLiveLink={`https://okay-bloomer.herokuapp.com/`} projectId={`okay-bloomer`} />
            
            <ProjectsProjectContainer projectName={`Jaunt`} 
            projectDescription={`Jaunt began in the mind of a friend of mine, born of his passion for table top role playing games. This website aimed to make Jaunt character creation and some of 
            the rules more widely available to further streamline the Jaunt TTRPG experience.`} 
            projectTechnicals={`Technologies used: HTML, CSS, JavaScript, Python, Flask, Postgres, Jinja Templates.
            
This CRUD application is one where time spent learning about development outpaced time spent working on meaningful changes, though the challenges posed and lessons learned are valuable. The main constraint with this application was my stubborn want to have it reflect the most up to date information so as to be most useful for users. However, the source project Jaunt was still in development and I relied on having consistent communication with the author, something that wasn't always possible.`} 
            projectImage={`/images/featuredJaunt.png`} projectImageAlt={'Jaunt Alternate'} projectGithubLink={`https://github.com/RobWal/Jaunt-website`} 
            projectLiveLink={`https://jaunt-website.herokuapp.com/home`} projectId={`jaunt`} />
            
            <ProjectsProjectContainer projectName={`Tic Tac Toe`} 
            projectDescription={`Tic Tac Toe is a nod to my humble beginnings as a developer, illustrating my appreciation for light colours and rounded fonts.`} 
            projectTechnicals={`Technologies used: HTML, CSS, Javascript.
            
Tic Tac Toe is a fairly straightforward app, it allows two users to play a hot seat game, keeps score of who wins, allows users to change their names, to reset the score, restart the game and toggle a move history section.`} 
            projectImage={`/images/featuredTicTacToe.png`} projectImageAlt={'Tic Tac Toe Alternate'} projectGithubLink={`https://github.com/RobWal/TicTacToe`} 
            projectLiveLink={`https://robwal.github.io/TicTacToe/`} projectId={`tic-tac-toe`} /> 
            <ProjectsH1 text={`Like what you see?`} />
            <ProjectsH1 text={`Get in touch!`} />
        </div>
    )
}

export default Projects;