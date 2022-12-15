import SocialButton from '../../atoms/SocialButton';
import './ContactSocialContainer.css';

interface ContactSocialContainer {
    linkedinLink: string,
    githubLink: string,
};


const ContactSocialContainer = ({linkedinLink, githubLink}: ContactSocialContainer) => {
    return (
        <div className="contact-social-container">
            <SocialButton fileName={'/images/gitIcon.png'} link={githubLink} alternate={'GitHub Link'} />
            <SocialButton fileName={'/images/linkedinIcon.png'} link={linkedinLink} alternate={'LinkedIn Link'} />
        </div>
    )
}

export default ContactSocialContainer;