import SocialButton from '../../atoms/SocialButton';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <SocialButton fileName="/images/gitIcon.png" link="https://github.com/RobWal" alternate="GitHub"/>
            <SocialButton fileName="/images/linkedinIcon.png" link="https://www.linkedin.com/in/robert-walerczak-2524a268/" alternate="LinkedIn"/>
            <SocialButton fileName={'/images/resumeIcon.png'} onClickFunction={() => window.open(`/images/Robert-Walerczak-Resume.pdf`)} alternate={'Resume'} />
        </div>
    )
}

export default Footer;