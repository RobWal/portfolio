import './ContactH1.css';

type ContactH1Type = {
    "text": string,
}

const ContactH1 = ({text}: ContactH1Type) => {
    return (
        <h1 className = "contact-h1">{text}</h1>
    );
};

export default ContactH1;