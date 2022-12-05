import AboutH1 from '../../atoms/AboutAtoms/AboutH1';
import AboutImageContainer from '../../molecules/AboutMolecules/AboutImageContainer';
import InterestIconContainer from '../../molecules/AboutMolecules/InterestIconContainer';
import AboutInterestsContainer from '../../organisms/AboutInterestsContainer';
import AboutTechStackContainer from '../../organisms/AboutTechStackContainer';
import AboutValuesContainer from '../../organisms/AboutValuesContainer';
import './About.css'


const About = () => {
    return (
        <div  className="about">
            <AboutH1 text={`Welcome to the page about me!`} />
            <AboutImageContainer imageSource={`/images/headshotSmall.png`} text={`I'm a full stack engineer passionate about clean, powerful websites designed to empower users.

I enjoy solving problems, streamlining processes and crushing goals.`}/>
            <AboutInterestsContainer interestContainer={[
                {"className": "about-icon-workout", "key": "Exercise", "imageSource": "/images/passions/workoutIcon.svg"},
                {"className": "about-icon-gaming", "key": "Gaming", "imageSource": "/images/passions/gamingIcon.svg"},
                {"className": "about-icon-psychology", "key": "Psychology", "imageSource": "/images/passions/psychologyIcon.svg"},
                {"className": "about-icon-passions", "key": "My Passions", "imageSource": "/images/passions/passionsIcon.svg"},
                {"className": "about-icon-cooking", "key": "Cooking", "imageSource": "/images/passions/cookingIcon.svg"},
                {"className": "about-icon-reading", "key": "Reading", "imageSource": "/images/passions/readingIcon.svg"},
                {"className": "about-icon-connections", "key": "People", "imageSource": "/images/passions/connectionsIcon.svg"},
                {"className": "about-icon-meditation", "key": "Meditation", "imageSource": "/images/passions/meditationIcon.svg"},

                
            ]}/>
            <AboutValuesContainer valuesContainer={[
                {"className": "about-icon-values", "key": "My Values", "imageSource": "/images/values/valuesIcon.svg"},
                {"className": "about-icon-growth", "key": "Growth", "imageSource": "/images/values/growthIcon.svg"},
                {"className": "about-icon-honesty", "key": "Honesty", "imageSource": "/images/values/honestyIcon.svg"},
                {"className": "about-icon-integrity", "key": "Integrity", "imageSource": "/images/values/integrityIcon.svg"},
                {"className": "about-icon-understanding", "key": "Understanding", "imageSource": "/images/values/understandingIcon.svg"},
            ]}/>
            {/* <AboutTechStackContainer techStackContainer={[
                {"className": "about-icon-growth", "key": "Growth", "imageSource": "/images/values/growthIcon.svg"},
                {"className": "about-icon-honesty", "key": "Honesty", "imageSource": "/images/values/honestyIcon.svg"},
                {"className": "about-icon-integrity", "key": "Integrity", "imageSource": "/images/values/integrityIcon.svg"},
                {"className": "about-icon-tech-stack", "key": "Tech Stack", "imageSource": "/images/values/valuesIcon.svg"},
                {"className": "about-icon-understanding", "key": "Understanding", "imageSource": "/images/values/understandingIcon.svg"},
            ]}/> */}
        </div>
    )
}

export default About;