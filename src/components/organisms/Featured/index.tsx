import FeaturedProjectContainer from '../../molecules/FeaturedProjectContainer';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured'>
            <FeaturedProjectContainer projectName={'Deep Sea Adventure'} 
            projectInternalLink={'#deep-sea-adventure'} 
            projectGithubLink={'https://github.com/RobWal/deep-sea-adventure'} 
            projectLiveLink={"https://deep-sea-adventure.onrender.com/"} 
            projectImage={"/images/featuredDeepSeaAdventure.png"} 
            projectDescription={'Deep Sea Adventure is an application designed to recreate the board game in your browser. For more information - '} 
            altProjectImageName="Deep Sea Adventure" 
            projectTechStack={[
                {"key": "HTML", "imageSource": "/images/techStack/HTMLIcon.svg"},
                {"key": "CSS", "imageSource": "/images/techStack/CSSIcon.svg"},
                {"key": "JavaScript", "imageSource": "/images/techStack/javaScriptIcon.svg"},
                {"key": "Technologies", "imageSource": "/images/techStack/techStackIcon.svg"},
                {"key": "React", "imageSource": "/images/techStack/reactIcon.svg"},
                {"key": "PostgreSQL", "imageSource": "/images/techStack/postgreSQLIcon.svg"},
            ]}
            />
            {/* </FeaturedProjectContainer> */}
            {/* <FeaturedProjectContainer projectName={'Okay Bloomer'} projectInternalLink={'#okay-bloomer'} projectGithubLink={'https://github.com/RobWal/okay-bloomer'} projectLiveLink={"https://okay-bloomer.herokuapp.com/"} projectImage={'/images/featuredOkayBloomer.png'} 
            projectDescription={`A website aimed at budding gardeners, helping them take their first steps on their gardening journey. For more information - `} altProjectImageName="Okay Bloomer"></FeaturedProjectContainer> */}
        </div>
    )
}

export default Featured;