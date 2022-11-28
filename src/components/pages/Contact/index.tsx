import AboutH1 from '../../atoms/AboutAtoms/AboutH1';
import AboutH2 from '../../atoms/AboutAtoms/AboutH2';
import './Contact.css'


const HomeScreen = () => {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <AboutH1 text={`It'll be easier once I have my details here!`} />
        </div>
    )
}

export default HomeScreen;