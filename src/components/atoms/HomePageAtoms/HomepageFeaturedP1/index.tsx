import { NavLink } from 'react-router-dom';
import './HomepageFeaturedP1.css';

type HomepageFeaturedP1 = {
    text: string,
    projectInternalLink: string,
};

const HomepageFeaturedP1 = ({text, projectInternalLink}: HomepageFeaturedP1) => {
    return (
        <p className="homepage-featured-p1">{text}<NavLink className="homepage-featured-internal-link" to={projectInternalLink}>click here!</NavLink></p>
    );
};

export default HomepageFeaturedP1;