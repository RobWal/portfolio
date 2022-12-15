import { Link, NavLink } from 'react-router-dom';
import './HomepageFeaturedP1.css';

type HomepageFeaturedP1 = {
    text: string,
    projectInternalLink: string,
};

const HomepageFeaturedP1 = ({text, projectInternalLink}: HomepageFeaturedP1) => {
    return (
        <p className="homepage-featured-p1">{text}<Link className="homepage-featured-internal-link" to={{pathname: "/projects/", hash: projectInternalLink}}>click here!</Link></p>
    );
};

export default HomepageFeaturedP1;