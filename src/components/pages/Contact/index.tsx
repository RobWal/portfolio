import ContactH1 from '../../atoms/ContactAtoms/ContactH1';
import ContactH2 from '../../atoms/ContactAtoms/ContactH2';
import SocialButton from '../../atoms/SocialButton'
import ContactSocialContainer from '../../molecules/ContactSocialContainer';
import './Contact.css'


const Contact = () => {
    return (
        <div className="contact">
            <ContactH1 text={`Reach out!`} />
            <ContactH2 text={`Find me via LinkedIn or GitHub:`} />
            <ContactSocialContainer linkedinLink={'https://www.linkedin.com/in/robert-walerczak-2524a268'} githubLink={'https://github.com/RobWal'} />
            <ContactH2 text={`Or take a look at my resume:`}/>
            <SocialButton fileName={'/images/resumeIcon.png'} onClickFunction={() => window.open(`/images/robertWalerczakResume.pdf`)} alternate={'Resume'} />
        </div>
    );
};

export default Contact;