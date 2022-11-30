import './AboutInterestName.css';

type AboutInterestNameType = {
    interestName: string,
}

const AboutInterestName = ({interestName}: AboutInterestNameType) => {
    return (
        <h2 className={`about-interest-name`}>{interestName}</h2>
    )
}


export default AboutInterestName;