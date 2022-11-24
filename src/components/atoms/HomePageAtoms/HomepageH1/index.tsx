import './HomepageH1.css';

type HomepageH1Type = {
    text: string,
}

const HomepageH1 = ({text}: HomepageH1Type) => {
    return (
        <h1 className="homepage-h1">{text}</h1>
    );
};

export default HomepageH1;