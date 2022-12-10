import FeaturedImage from '../../atoms/HomePageAtoms/FeaturedImage';
import SocialButton from '../../atoms/SocialButton';
import './FeaturedProjectContainer.css'
import HomepageFeaturedH1 from '../../atoms/HomePageAtoms/HomepageFeaturedH1';
import HomepageFeaturedP1 from '../../atoms/HomePageAtoms/HomepageFeaturedP1';
import HomepageFeaturedTechStack from '../../atoms/HomePageAtoms/HomepageFeaturedTechStack';

interface FeaturedProjectContainer {
    projectName: string,
    projectGithubLink: string,
    projectImage: string,
    projectDescription: string,
    altProjectImageName: string,
    projectInternalLink: string,
    projectLiveLink: string,
    projectTechStack: ProjectTechStackType[],
}


type ProjectTechStackType = {
    [index: string]: string,
}

const FeaturedProjectContainer = ({projectName, projectGithubLink, projectLiveLink, projectImage, altProjectImageName, projectDescription, projectInternalLink, projectTechStack}: FeaturedProjectContainer) => {
    return (
        <div className='featured-project-container'>
            <FeaturedImage projectImage={projectImage} altProjectImageName={altProjectImageName} />
            <HomepageFeaturedH1 text={projectName} />
            <HomepageFeaturedTechStack projectTechStack = {[
                {"key": "HTML", "imageSource": "/images/techStack/HTMLIcon.svg"},
                {"key": "CSS", "imageSource": "/images/techStack/CSSIcon.svg"},
                {"key": "JavaScript", "imageSource": "/images/techStack/javaScriptIcon.svg"},
                {"key": "React", "imageSource": "/images/techStack/reactIcon.svg"},
                {"key": "TypeScript", "imageSource": "/images/techStack/typeScriptIcon.svg"},
            ]}  />
            <HomepageFeaturedP1 text={projectDescription} projectInternalLink={projectInternalLink}/>
            <div className="social-links">
                <SocialButton fileName="/images/gitIcon.png" link={projectGithubLink} alternate='Github Link' />
                <SocialButton fileName="/images/eyeIcon.png" link={projectLiveLink} alternate='Live Link' />
            </div>
        </div>
    )
}

export default FeaturedProjectContainer;