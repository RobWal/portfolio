import AboutH1 from '../../atoms/AboutAtoms/AboutH1';
import AboutImageContainer from '../../molecules/AboutMolecules/AboutImageContainer';
import './About.css'


const About = () => {
    return (
        <div  className="about">
            <AboutH1 text={`About me`} />
            <AboutImageContainer imageSource={`/images/croppedHeadshot.png`} />
        </div>
    )
}

export default About;