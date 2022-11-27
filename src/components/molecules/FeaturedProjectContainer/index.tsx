import FeaturedImage from '../../atoms/HomePageAtoms/FeaturedImage';
import SocialButton from '../../atoms/SocialButton';
import './FeaturedProjectContainer.css'
import HomepageFeaturedH1 from '../../atoms/HomePageAtoms/HomepageFeaturedH1';
import HomepageFeaturedP1 from '../../atoms/HomePageAtoms/HomepageFeaturedP1';

type FeaturedProjectContainer = {
    projectName: string,
    projectGithubLink: string,
    projectImage: string,
    projectDescription: string,
    altProjectImageName: string,
    projectInternalLink: string,
    projectLiveLink: string,
}

const FeaturedProjectContainer = ({projectName, projectGithubLink, projectLiveLink, projectImage, altProjectImageName, projectDescription, projectInternalLink}: FeaturedProjectContainer) => {
    return (
        <div className='featured-project-container'>
            <FeaturedImage projectImage={projectImage} altProjectImageName={altProjectImageName} />
            <HomepageFeaturedH1 text={projectName} />
            <HomepageFeaturedP1 text={projectDescription} projectInternalLink={projectInternalLink}/>
            <div className="social-links">
                <SocialButton fileName="/images/gitIcon.png" link={projectGithubLink} alternate='Github Link' />
                <SocialButton fileName="/images/eyeIcon.png" link={projectLiveLink} alternate='Live Link' />
            </div>
        </div>
    )
}

export default FeaturedProjectContainer;