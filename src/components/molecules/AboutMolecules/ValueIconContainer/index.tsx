import AboutInterestIcon from '../../../atoms/AboutAtoms/AboutInterestIcon';
import AboutInterestName from '../../../atoms/AboutAtoms/AboutInterestName';
import AboutValueIcon from '../../../atoms/AboutAtoms/AboutValueIcon';
import './ValueIconContainer.css';

interface ValueIconContainerInterface {
    imageSource: string,
    className: string,
    // interestName: string,
}

const ValueIconContainer = ({imageSource, className}: ValueIconContainerInterface) => {
    return (
        <div className={`value-icon-container ${className}`}>
            <svg className="circlesvg-value" xmlns="https://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="49%" />
            </svg>
            <AboutValueIcon imageSource={imageSource} />
        </div>
    );
};

export default ValueIconContainer;