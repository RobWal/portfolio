import './AboutInterestIcon.css';

type AboutInterestIconType = {
    imageSource: string,
}

const AboutInterestIcon = ({imageSource}: AboutInterestIconType) => {
    return (
        <img className={`about-interest-icon`} src={imageSource}/>
    )
}


export default AboutInterestIcon;