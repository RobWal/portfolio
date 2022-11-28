import AboutH2 from '../../../atoms/AboutAtoms/AboutH2';
import AboutProfileImage from '../../../atoms/AboutAtoms/AboutProfileImage';
import './AboutImageContainer.css';

interface AboutProfileImageInterface {
    imageSource: string,
}

const AboutImageContainer = ({imageSource}: AboutProfileImageInterface) => {
    return (
        <div className="about-image-container">
            <AboutProfileImage imageSource={imageSource} />
            <AboutH2 text={'Hello there'}/>
        </div>
    );
};

export default AboutImageContainer;