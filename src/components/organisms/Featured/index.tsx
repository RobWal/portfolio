import H1 from '../../atoms/H1';
import FeaturedProjectContainer from '../../molecules/FeaturedProjectContainer';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured'>
            <FeaturedProjectContainer projectName={'Deep Sea Adventure'} projectLink={'https://github.com/RobWal/deep-sea-adventure'} projectImage={'https://i.imgur.com/g65mKLw.png'} projectDescription={'An online single player recreation of the table top game, Deep Sea Adventure!'} altProjectImageName=""></FeaturedProjectContainer>
            <FeaturedProjectContainer projectName={'Okay Bloomer'} projectLink={'https://github.com/RobWal/okay-bloomer'} projectImage={'https://i.imgur.com/ytxrO29.png'} projectDescription={'A website dedicated to helping budding gardeners on their journey!'} altProjectImageName=""></FeaturedProjectContainer>
        </div>
    )
}

export default Featured;