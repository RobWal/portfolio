import FeaturedImage from '../../atoms/FeaturedImage';
import H2 from '../../atoms/H2';
import P1 from '../../atoms/P';
import P from '../../atoms/P';
import SocialButton from '../../atoms/SocialButton';
import { NavLink } from 'react-router-dom';
import './FeaturedProjectContainer.css'

type FeaturedProjectContainer = {
    projectName: string,
    projectGithubLink: string,
    projectImage: string,
    projectDescription: string,
    altProjectImageName: string,
    link: string,
}

const FeaturedProjectContainer = ({projectName, projectGithubLink, projectImage, altProjectImageName, projectDescription, link}: FeaturedProjectContainer) => {
    return (
        <div className = 'featured-project-container'>
            {/* <H2 text={projectName}></H2> */}
            <NavLink to={link}><FeaturedImage projectImage={projectImage} altProjectImageName={altProjectImageName}/></NavLink>
            <P1 text={projectDescription}></P1>
            <SocialButton fileName="gitIcon.png" link={projectGithubLink} alternate='GitHub Project Link'/>
        </div>
    )
}

export default FeaturedProjectContainer;