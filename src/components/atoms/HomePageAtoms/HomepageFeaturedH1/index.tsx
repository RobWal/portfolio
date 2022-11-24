import './HomepageFeaturedH1.css';

type HomepageFeaturedH1 = {
    text: string,
}

const HomepageFeaturedH1 = ({text}: HomepageFeaturedH1) => {
    return (
        <h1 className="homepage-featured-h1">{text}</h1>
    )
}

export default HomepageFeaturedH1;