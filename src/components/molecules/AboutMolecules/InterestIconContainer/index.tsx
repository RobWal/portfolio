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
            <AboutInterestIcon imageSource={imageSource} />
            {/* <AboutInterestName interestName={interestName} /> */}
        </div>
    );
};

export default InterstIconContainer;