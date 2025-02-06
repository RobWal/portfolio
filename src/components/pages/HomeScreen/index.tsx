import './HomeScreen.css';
import { useNavigate } from 'react-router-dom';
import HomepageH1 from '../../atoms/HomePageAtoms/HomepageH1';
import HomepageH2 from '../../atoms/HomePageAtoms/HomepageH2';
import SocialButton from '../../atoms/SocialButton';
import TextImageLinkContainer from '../../molecules/HomepageMolecules/TextImageLinkContainer';
import AboutTechStackContainer from '../../organisms/AboutTechStackContainer';
import Featured from '../../organisms/Featured';


const HomeScreen = () => {
    const navigate = useNavigate();
    return (
        <div className="home-screen">
            <HomepageH1 text={`Welcome to my online portfolio!`} />
            <HomepageH2 text={`I'm a full stack engineer passionate about finding the simplest most comprehensive solutions to every day problems, helping to empower people in all walks of life.`} />
            <TextImageLinkContainer 
                textComponent={<HomepageH2 text={`Learn more on my About page \n or take a look at my resume.`} />} 
                ImageLinkComponent={<div className="image-link-component-hompepage-unique">
                    <SocialButton fileName={'/images/aboutIcon.svg'} alternate={'About'} onClickFunction={() => navigate('/about')}/>
                    <SocialButton fileName={'/images/resumeIcon.png'} alternate={'Resume'} onClickFunction={() => window.open(`/images/Robert-Walerczak-Resume.pdf`)}/>
                </div>} />
            <HomepageH1 text={'Experienced with:'} />
            <AboutTechStackContainer techStackContainer={[
                {"className": "about-icon-react", "key": "React", "imageSource": "/images/techStack/reactIcon.svg"},
                {"className": "about-icon-postgresql", "key": "PostgreSQL", "imageSource": "/images/techStack/postgreSQLIcon.svg"},
                {"className": "about-icon-nodejs", "key": "Node.js", "imageSource": "/images/techStack/nodejsIcon.svg"},
                {"className": "about-icon-typeScript", "key": "TypeScript", "imageSource": "/images/techStack/typeScriptIcon.svg"},
                {"className": "about-icon-python", "key": "Python", "imageSource": "/images/techStack/pythonIconSimplified.svg"},
                {"className": "about-icon-flask", "key": "Flask", "imageSource": "/images/techStack/flaskIcon.svg"},
                {"className": "about-icon-html", "key": "HTML", "imageSource": "/images/techStack/HTMLIcon.svg"},
                {"className": "about-icon-css", "key": "CSS", "imageSource": "/images/techStack/CSSIcon.svg"},
                {"className": "about-icon-javaScript", "key": "JavaScript", "imageSource": "/images/techStack/javaScriptIcon.svg"},
            ]}/>
            <HomepageH1 text={'Featured Project'} />
            <Featured></Featured>
            <HomepageH1 text={'Like what you see?'} />
            <HomepageH1 text={'Get in touch!'} />
        </div>
    );
};

export default HomeScreen;