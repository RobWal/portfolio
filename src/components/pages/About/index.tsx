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
                {"className": "about-icon-workout", "key": "Exercise", "imageSource": "/images/passions/workoutIcon.svg"},
                {"className": "about-icon-gaming", "key": "Gaming", "imageSource": "/images/passions/gamingIcon.svg"},
                {"className": "about-icon-psychology", "key": "Psychology", "imageSource": "/images/passions/psychologyIcon.svg"},
                {"className": "about-icon-passions", "key": "My Passions", "imageSource": "/images/passions/passionsIcon.svg"},
                {"className": "about-icon-cooking", "key": "Cooking", "imageSource": "/images/passions/cookingIcon.svg"},
                {"className": "about-icon-connections", "key": "People", "imageSource": "/images/passions/connectionsIcon.svg"},
                {"className": "about-icon-meditation", "key": "Meditation", "imageSource": "/images/passions/meditationIcon.svg"},
                // {"className": "about-icon-meditation", "key": "Growth Mindset", "imageSource": "/images/values/growthmindsetIcon.svg"},
                // {"className": "about-icon-meditation", "key": "Meditation", "imageSource": "/images/passions/meditationIcon.svg"},
                // {"className": "about-icon-meditation", "key": "Meditation", "imageSource": "/images/passions/meditationIcon.svg"},
                // {"className": "about-icon-meditation", "key": "Meditation", "imageSource": "/images/passions/meditationIcon.svg"},

            ]}/>
            {/* <AboutValuesContainer /> */}
        </div>
    )
}

export default About;