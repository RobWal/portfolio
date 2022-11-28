import './AboutProfileImage.css';

type AboutProfileImageType = {
    imageSource: string,
}

const AboutProfileImage = ({imageSource}: AboutProfileImageType) => {
    return (
        <img className={`about-profile-image`} src={imageSource}/>
    )
}


export default AboutProfileImage;