import './ContactH2.css';

type ContactH2Type = {
    "text": string,
}

const ContactH2 = ({text}: ContactH2Type) => {
    return (
        <h1 className = "contact-h2">{text}</h1>
    );
};

export default ContactH2;