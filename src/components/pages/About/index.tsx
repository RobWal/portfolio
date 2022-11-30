import AboutH1 from '../../atoms/AboutAtoms/AboutH1';
import AboutImageContainer from '../../molecules/AboutMolecules/AboutImageContainer';
import InterestIconContainer from '../../molecules/AboutMolecules/InterestIconContainer';
import AboutInterestsContainer from '../../organisms/AboutInterestsContainer';
import './About.css'


const About = () => {
    return (
        <div  className="about">
            <AboutH1 text={`About me!`} />
            <AboutImageContainer imageSource={`/images/croppedHeadshot.png`} />
            <AboutInterestsContainer interestContainer={[
                {"className": "about-icon-cooking", "key": "Cooking", "imageSource": "/images/cookingIcon.svg"},
                {"className": "about-icon-connections", "key": "People", "imageSource": "/images/connectionsIcon.svg"},
                {"className": "about-icon-gaming", "key": "Gaming", "imageSource": "/images/gamingIcon.svg"},
                {"className": "about-icon-psychology", "key": "Psychology", "imageSource": "/images/psychologyIcon.svg"},
                {"className": "about-icon-workout", "key": "Exercise", "imageSource": "/images/workoutIcon.svg"},
                {"className": "about-icon-passions", "key": "My Passions", "imageSource": "/images/passionsIcon.svg"},
                {"className": "about-icon-meditation", "key": "Meditation", "imageSource": "/images/meditationIcon.svg"},
            ]}/>
            {/* <AboutValuesContainer /> */}
        </div>
    )
}

export default About;