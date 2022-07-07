import SocialButton from '../../atoms/SocialButton';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <SocialButton fileName="gitIcon.png" link="https://github.com/RobWal" alternate="GitHub"/>
            <SocialButton fileName="linkedinIcon.png" link="https://www.linkedin.com/in/robert-walerczak-2524a268/" alternate="LinkedIn"/>
        </div>
    )
}

export default Footer;