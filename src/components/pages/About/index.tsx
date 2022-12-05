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
            <AboutTechStackContainer techStackContainer={[
                {"className": "about-icon-html", "key": "HTML", "imageSource": "/images/techStack/HTMLIcon.svg"},
                {"className": "about-icon-css", "key": "CSS", "imageSource": "/images/techStack/CSSIcon.svg"},
                {"className": "about-icon-javaScript", "key": "JavaScript", "imageSource": "/images/techStack/javaScriptIcon.svg"},
                {"className": "about-icon-tech-stack", "key": "Technologies", "imageSource": "/images/techStack/techStackIcon.svg"},
                {"className": "about-icon-react", "key": "React", "imageSource": "/images/techStack/reactIcon.svg"},
                {"className": "about-icon-postgresql", "key": "PostgreSQL", "imageSource": "/images/techStack/postgreSQLIcon.svg"},
                {"className": "about-icon-nodejs", "key": "Node.js", "imageSource": "/images/techStack/nodejsIcon.svg"},
                {"className": "about-icon-typeScript", "key": "TypeScript", "imageSource": "/images/techStack/typeScriptIcon.svg"},
                {"className": "about-icon-python", "key": "Python", "imageSource": "/images/techStack/pythonIconSimplified.svg"},
                {"className": "about-icon-flask", "key": "Flask", "imageSource": "/images/techStack/flaskIcon.svg"},

            ]}/>
            <AboutH1 text={'Like what you see?'} />
            <AboutH1 text={'Get in touch!'} />
        </div>
    )
}

export default About;