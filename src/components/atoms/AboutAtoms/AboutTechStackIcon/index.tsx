import './AboutTechStackIcon.css';

type AboutTechStackIconType = {
    imageSource: string,
}

const AboutTechStackIcon = ({imageSource}: AboutTechStackIconType) => {
    return (
        <img className={`about-tech-stack-icon`} src={imageSource}/>
    )
}


export default AboutTechStackIcon;