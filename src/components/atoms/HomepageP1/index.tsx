import './HomepageP1.css';

type HomepageP1 = {
    text: string,
};

const HomepageP1 = ({text}: HomepageP1) => {
    return (
        <p className="homepage-p1">{text}</p>
    );
};

export default HomepageP1;