import H1 from '../../atoms/H1';
import P1 from '../../atoms/P1';
import './About.css'


const About = () => {
    return (
        <div  className="about">
            {/* <H1 text={'Hi, I\'m Robert Walerczak, nice to meet you!'}></H1> */}
            <P1 text={'I\'m a Full Stack Developer passionate about clean, powerful websites designed to empower users.'}></P1>
            <P1 text={''}></P1>
        </div>
    )
}

export default About;