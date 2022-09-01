import H1 from '../../atoms/H1';
import FeaturedProjectContainer from '../../molecules/FeaturedProjectContainer';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured'>
            <FeaturedProjectContainer projectName={'Deep Sea Adventure'} link={'/projects/deep-sea-adventure'} projectGithubLink={'https://github.com/RobWal/deep-sea-adventure'} projectImage={'https://i.imgur.com/g65mKLw.png'} 
            projectDescription={'Deep Sea Adventure - An online single player recreation of the table top game, Deep Sea Adventure!'} altProjectImageName="Deep Sea Adventure"></FeaturedProjectContainer>
            <FeaturedProjectContainer projectName={'Okay Bloomer'} link={'/projects/okay-bloomer'} projectGithubLink={'https://github.com/RobWal/okay-bloomer'} projectImage={'https://i.imgur.com/ytxrO29.png'} 
            projectDescription={'Okay Bloomer - A website dedicated to helping budding gardeners on their journey!'} altProjectImageName="Okay Bloomer"></FeaturedProjectContainer>
        </div>
    )
}

export default Featured;