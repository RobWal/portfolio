import './FeaturedImage.css'

type FeaturedImage = {
    projectImage: string,
    altProjectImageName: string,
}

const FeaturedImage = ({projectImage, altProjectImageName}: FeaturedImage) => {
    return (
        <img className="featured-image" src={projectImage} alt={altProjectImageName}/>
    )
}

export default FeaturedImage;