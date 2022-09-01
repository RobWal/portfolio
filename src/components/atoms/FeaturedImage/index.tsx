import './FeaturedImage.css'

type FeaturedImage = {
    projectImage: string,
    altProjectImageName: string,
    link: string,
}

const FeaturedImage = ({projectImage, altProjectImageName, link}: FeaturedImage) => {
    return (
        <a className="featured-image-link" href={link} >
            <img className="featured-image" src={projectImage} alt={altProjectImageName}/>   
        </a>
        // <img className="featured-image" src={projectImage} alt={altProjectImageName}/>
    )
}

export default FeaturedImage;