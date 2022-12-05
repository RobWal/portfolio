import AboutInterestName from '../../atoms/AboutAtoms/AboutInterestName';
import AboutValueName from '../../atoms/AboutAtoms/AboutValueName';
import InterestIconContainer from '../../molecules/AboutMolecules/InterestIconContainer';
import ValueIconContainer from '../../molecules/AboutMolecules/ValueIconContainer';
import './AboutValuesContainer.css';

type ValuesContainerType = {
    valuesContainer: ValuesInterface[],
}

interface ValuesInterface {
    key: string,
    className: string,
    imageSource: string,
    // interestName: string,
}

const AboutValuesContainer = ({valuesContainer}: ValuesContainerType) => {
    return (
        <div className="about-values-container">
            {valuesContainer.map((container, index) => {
                return (
                    <div key={index}>
                        <ValueIconContainer key={container.key} className={container.className} imageSource={container.imageSource}/>
                        <AboutValueName interestName={container.key}/>
                    </div>
                )
            })}
        </div>
    );
};

export default AboutValuesContainer;