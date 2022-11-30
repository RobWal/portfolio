import AboutInterestName from '../../atoms/AboutAtoms/AboutInterestName';
import InterestIconContainer from '../../molecules/AboutMolecules/InterestIconContainer';
import './AboutInterestsContainer.css';

type InterestsContainerType = {
    interestContainer: InterestsInterface[],
}

interface InterestsInterface {
    key: string,
    className: string,
    imageSource: string,
    // interestName: string,
}

const AboutInterestsContainer = ({interestContainer}: InterestsContainerType) => {
    return (
        <div className="about-interests-container">
            {interestContainer.map((container, index) => {
                return (
                    <div key={index}>
                        <InterestIconContainer key={container.key} className={container.className} imageSource={container.imageSource}/>
                        <AboutInterestName interestName={container.key}/>
                    </div>
                )
            })}
        </div>
    );
};

export default AboutInterestsContainer;