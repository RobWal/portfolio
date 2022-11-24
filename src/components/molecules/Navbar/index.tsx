import { NavLink } from 'react-router-dom';
import NavDownloadImage from '../../atoms/NavDownloadImage';
import NavDownloadLink from '../../atoms/NavDownloadLink';
import './Navbar.css';


const Navbar = () => {
    return (
        <div  className="navbar">
            <NavLink className="nav-link" to='/'>Home</NavLink>
            <NavLink className="nav-link" to='/about'>About</NavLink>
            <NavLink className="nav-link" to='/projects'>Projects</NavLink>
            <NavLink className="nav-link" to='/contact'>Contact</NavLink>
            <NavDownloadLink text={'Resume'}></NavDownloadLink>
            <NavDownloadImage></NavDownloadImage>
        </div>
    )
}

export default Navbar;