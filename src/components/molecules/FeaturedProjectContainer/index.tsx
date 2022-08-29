import FeaturedImage from '../../atoms/FeaturedImage';
import H2 from '../../atoms/H2';
import P from '../../atoms/P';
import './FeaturedProjectContainer.css'

type FeaturedProjectContainer = {
    projectName: string,
    projectLink: string,
    projectImage: string,
    projectDescription: string,
    altProjectImageName: string,
}

const FeaturedProjectContainer = ({projectName, projectLink, projectImage, altProjectImageName, projectDescription}: FeaturedProjectContainer) => {
    return (
        <div className = 'featured-project-container'>
            <H2 text={projectName}></H2>
            <P text={projectDescription}></P>
            <FeaturedImage projectImage={projectImage} altProjectImageName={altProjectImageName}/>
            <a href={projectLink} target="_blank">
                <img src='gitIcon.png' alt='GitHub Project Link' width="50px" height="40px"/>
            </a>
        </div>
    )
}

export default FeaturedProjectContainer;