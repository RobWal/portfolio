import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <div  className="navbar">
            <NavLink className="nav-link" to='/'>Home</NavLink>
            <NavLink className="nav-link" to='/about'>About</NavLink>
            <NavLink className="nav-link" to='/projects'>Projects</NavLink>
            {/* <NavLink className="nav-link" to='/contact'>Contact</NavLink> */}
            <a href = "download.png" download>Resume</a>
            <img src = "download.png" alt="DownloadImage" width="50px" height="40px"/>
        </div>
    )
}

export default Navbar;