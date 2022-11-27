import './HomepageH2.css';

type HomepageH2Type = {
    text: string,
}

const HomepageH2 = ({text}: HomepageH2Type) => {
    return (
        <h1 className="homepage-h2">{text}</h1>
    );
};

export default HomepageH2;