import AboutH1 from '../../atoms/AboutAtoms/AboutH1';
import AboutH2 from '../../atoms/AboutAtoms/AboutH2';
import './Contact.css'


const HomeScreen = () => {
    return (
        <div className="contact">
            <h1>Under Construction</h1>
            <AboutH2 text={`Find me via`} />
            <AboutH2 text={`LinkedIn`} />
            <a href="www.linkedin.com/in/robert-walerczak-2524a268">Here</a>
            <AboutH2 text={`Github`} />
            <a href="https://github.com/RobWal">Here</a>
            <AboutH2 text={`Or send an email - r.walerczak@gmail.com`} />
        </div>
    )
}

export default HomeScreen;