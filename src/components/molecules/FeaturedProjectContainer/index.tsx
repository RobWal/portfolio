import FeaturedImage from '../../atoms/FeaturedImage';
import H2 from '../../atoms/H2';
import P1 from '../../atoms/P1';
import P from '../../atoms/P1';
import SocialButton from '../../atoms/SocialButton';
import { NavLink } from 'react-router-dom';
import './FeaturedProjectContainer.css'
import H1 from '../../atoms/H1';

type FeaturedProjectContainer = {
    projectName: string,
    projectGithubLink: string,
    projectImage: string,
    projectDescription: string,
    altProjectImageName: string,
    navLink: string,
    projectLiveLink: string,
}

const FeaturedProjectContainer = ({projectName, projectGithubLink, projectLiveLink, projectImage, altProjectImageName, projectDescription, navLink}: FeaturedProjectContainer) => {
    return (
        <div className = 'featured-project-container'>
            <NavLink className="featured-nav-link" to={navLink}><FeaturedImage projectImage={projectImage} altProjectImageName={altProjectImageName}/></NavLink>
            <H1 text={projectName}></H1>
            <P1 text={projectDescription}></P1>
            <div className="featured-social-links">
                <SocialButton fileName="/images/gitIcon.png" link={projectGithubLink} alternate='GitHub Project Link'/>
                <SocialButton fileName="/images/eyeIcon.png" link={projectLiveLink} alternate='GitHub Project Link'/>
            </div>
        </div>
    )
}

export default FeaturedProjectContainer;