import AboutInterestName from '../../atoms/AboutAtoms/AboutInterestName';
import AboutTechStackName from '../../atoms/AboutAtoms/AboutTechStackName';
import AboutValueName from '../../atoms/AboutAtoms/AboutValueName';
import InterestIconContainer from '../../molecules/AboutMolecules/InterestIconContainer';
import TechStackIconContainer from '../../molecules/AboutMolecules/TechStackIconContainer';
import ValueIconContainer from '../../molecules/AboutMolecules/ValueIconContainer';
import './AboutTechStackContainer.css';

type TechStackContainerType = {
    techStackContainer: TechStackInterface[],
}

interface TechStackInterface {
    key: string,
    className: string,
    imageSource: string,
}

const AboutTechStackContainer = ({techStackContainer}: TechStackContainerType) => {
    return (
        <div className="about-tech-stack-container">
            {techStackContainer.map((container, index) => {
                return (
                    <div key={index}>
                        <TechStackIconContainer key={container.key} className={container.className} imageSource={container.imageSource}/>
                        <AboutTechStackName techStackName={container.key}/>
                    </div>
                )
            })}
        </div>
    );
};

export default AboutTechStackContainer;