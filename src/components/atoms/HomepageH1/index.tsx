import './HomepageH1.css';

type HomepageH1 = {
    text: string,
}

const HomepageH1 = ({text}: HomepageH1) => {
    return (
        <h1 className="homepage-h1">{text}</h1>
    )
}

export default HomepageH1;