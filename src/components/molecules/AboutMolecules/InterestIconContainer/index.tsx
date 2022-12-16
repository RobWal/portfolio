import AboutInterestIcon from '../../../atoms/AboutAtoms/AboutInterestIcon';
import AboutInterestName from '../../../atoms/AboutAtoms/AboutInterestName';
import './InterestIconContainer.css';

interface InterestIconContainerInterface {
    imageSource: string,
    className: string,
    // interestName: string,
}

const InterstIconContainer = ({imageSource, className}: InterestIconContainerInterface) => {
    return (
        <div className={`interest-icon-container ${className}`}>
            <svg className="circlesvg-passion" xmlns="https://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="49%" />
            </svg>
            <AboutInterestIcon imageSource={imageSource} />
        </div>
    );
};

export default InterstIconContainer;