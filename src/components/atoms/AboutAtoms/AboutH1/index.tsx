import './AboutH1.css';

type AboutH1Type = {
    text: string,
}

const AboutH1 = ({text}: AboutH1Type) => {
    return (
        <h1 className="about-h1">{text}</h1>
    );
};

export default AboutH1;