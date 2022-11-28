import './AboutH1.css';

type AboutH1Type = {
    text: string,
}

const AboutH1 = ({text}: AboutH1Type) => {
    return (
        <div className="about-h1">{text}</div>
    );
};

export default AboutH1;