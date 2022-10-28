import { NavLink } from 'react-router-dom';
import NavDownloadImage from '../../atoms/NavDownloadImage';
import NavDownloadLink from '../../atoms/NavDownloadLink';
// import SocialButton from '../../atoms/SocialButton';
import './Navbar.css'


const Navbar = () => {
    return (
        <div  className="navbar">
            <NavLink className="nav-link" to='/'>Home</NavLink>
            <NavLink className="nav-link" to='/about'>About</NavLink>
            <NavLink className="nav-link" to='/projects'>Projects</NavLink>
            <NavDownloadLink text={'Resume'}></NavDownloadLink>
            <NavDownloadImage></NavDownloadImage>
            {/* <SocialButton fileName="gitIcon.png" link="https://github.com/RobWal" alternate="GitHub"/>
            <SocialButton fileName="linkedinIcon.png" link="https://www.linkedin.com/in/robert-walerczak-2524a268/" alternate="LinkedIn"/> */}
        </div>
    )
}

export default Navbar;