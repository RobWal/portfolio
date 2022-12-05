import './AboutValueIcon.css';

type AboutValueIconType = {
    imageSource: string,
}

const AboutValueIcon = ({imageSource}: AboutValueIconType) => {
    return (
        <img className={`about-value-icon`} src={imageSource}/>
    )
}


export default AboutValueIcon;