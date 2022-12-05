import './AboutTechStackName.css';

type AboutTechStackNameType = {
    techStackName: string,
}

const AboutTechStackName = ({techStackName}: AboutTechStackNameType) => {
    return (
        <h2 className={`about-tech-stack-name`}>{techStackName}</h2>
    )
}


export default AboutTechStackName;