import FeaturedProjectContainer from '../../molecules/FeaturedProjectContainer';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured'>
            <FeaturedProjectContainer projectName={'Deep Sea Adventure'} projectInternalLink={'#deep-sea-adventure'} projectGithubLink={'https://github.com/RobWal/deep-sea-adventure'} projectLiveLink={"https://deep-see-adventure.herokuapp.com/"} projectImage={"/images/featuredDeepSeaAdventure.png"} 
            projectDescription={'Deep Sea Adventure is a single-player online recreation of the board game. For more information - '} altProjectImageName="Deep Sea Adventure"></FeaturedProjectContainer>
            <FeaturedProjectContainer projectName={'Okay Bloomer'} projectInternalLink={'#okay-bloomer'} projectGithubLink={'https://github.com/RobWal/okay-bloomer'} projectLiveLink={"https://okay-bloomer.herokuapp.com/"} projectImage={'/images/featuredOkayBloomer.png'} 
            projectDescription={`A website aimed at budding gardeners, helping them take their first steps on their gardening journey. For more information - `} altProjectImageName="Okay Bloomer"></FeaturedProjectContainer>
        </div>
    )
}

export default Featured;