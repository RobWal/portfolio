import './AboutValueName.css';

type AboutValueNameType = {
    interestName: string,
}

const AboutValueName = ({interestName}: AboutValueNameType) => {
    return (
        <h2 className={`about-value-name`}>{interestName}</h2>
    )
}


export default AboutValueName;