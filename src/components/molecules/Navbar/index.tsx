import { NavLink } from 'react-router-dom';
import SocialButton from '../../atoms/SocialButton';
import './Navbar.css'


const Navbar = () => {
    return (
        <div  className="navbar">
            <NavLink className="nav-link" to='/'>Home</NavLink>
            <NavLink className="nav-link" to='/about'>About</NavLink>
            <NavLink className="nav-link" to='/projects'>Projects</NavLink>
            <a href = "download.png" download>Resume</a>
            <a href = "download.png" download>
                <img src = "download.png" alt="DownloadImage"/>    
            </a>
            {/* <SocialButton fileName="gitIcon.png" link="https://github.com/RobWal" alternate="GitHub"/>
            <SocialButton fileName="linkedinIcon.png" link="https://www.linkedin.com/in/robert-walerczak-2524a268/" alternate="LinkedIn"/> */}
        </div>
    )
}

export default Navbar;