import AboutInterestIcon from '../../../atoms/AboutAtoms/AboutInterestIcon';
import AboutInterestName from '../../../atoms/AboutAtoms/AboutInterestName';
import AboutTechStackIcon from '../../../atoms/AboutAtoms/AboutTechStackIcon';
import AboutValueIcon from '../../../atoms/AboutAtoms/AboutValueIcon';
import './TechStackIconContainer.css';

interface TechStackIconContainerInterface {
    imageSource: string,
    className: string,
    // interestName: string,
}

const TechStackIconContainer = ({imageSource, className}: TechStackIconContainerInterface) => {
    return (
        <div className={`tech-stack-icon-container ${className}`}>
            <svg className="circlesvg-tech-stack" xmlns="https://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="49%" />
            </svg>
            <AboutTechStackIcon imageSource={imageSource} />
            <img className="tech-stack-icon-container-smallFlame" src="/images/smallFlame.svg"></img>
        </div>
    );
};

export default TechStackIconContainer;