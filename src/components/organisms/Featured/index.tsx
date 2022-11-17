import H1 from '../../atoms/H1';
import FeaturedProjectContainer from '../../molecules/FeaturedProjectContainer';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured'>
            <FeaturedProjectContainer projectName={'Deep Sea Adventure'} navLink={'/projects/deep-sea-adventure'} projectGithubLink={'https://github.com/RobWal/deep-sea-adventure'} projectLiveLink={"https://deep-see-adventure.herokuapp.com/"} projectImage={"/images/featuredDeepSeaAdventure.png"} 
            projectDescription={'An online single player recreation of the table top game, Deep Sea Adventure!'} altProjectImageName="Deep Sea Adventure"></FeaturedProjectContainer>
            <FeaturedProjectContainer projectName={'Okay Bloomer'} navLink={'/projects/okay-bloomer'} projectGithubLink={'https://github.com/RobWal/okay-bloomer'} projectLiveLink={"https://okay-bloomer.herokuapp.com/"} projectImage={'/images/featuredOkayBloomer.png'} 
            projectDescription={'A website dedicated to helping budding gardeners on their journey!'} altProjectImageName="Okay Bloomer"></FeaturedProjectContainer>
            <FeaturedProjectContainer projectName={'Tic Tac Toe'} navLink={'/projects/tic-tac-toe'} projectGithubLink={'https://github.com/RobWal/TicTacToe'} projectLiveLink={"https://robwal.github.io/TicTacToe/"} projectImage={'/images/featuredTicTacToe.png'} 
            projectDescription={'A two player version of the classic!'} altProjectImageName="Tic Tac Toe"></FeaturedProjectContainer>
            <FeaturedProjectContainer projectName={'Jaunt'} navLink={'/projects/jaunt'} projectGithubLink={'https://github.com/RobWal/Jaunt-website'} projectLiveLink={"https://jaunt-website.herokuapp.com/home"} projectImage={'/images/featuredJaunt.png'} 
            projectDescription={'A website for a TTRPG, with character creation and some game basics!'} altProjectImageName="Jaunt"></FeaturedProjectContainer>
        </div>
    )
}

export default Featured;