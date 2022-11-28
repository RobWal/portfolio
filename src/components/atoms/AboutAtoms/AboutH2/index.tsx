import './AboutH2.css';

type AboutH2Type = {
    text: string,
}

const AboutH2 = ({text}: AboutH2Type) => {
    return (
        <div className="about-h2">{text}</div>
    );
};

export default AboutH2;