import { NavLink } from 'react-router-dom';
import HeaderH1 from '../../atoms/Header/HeaderH1';
import HeaderH2 from '../../atoms/Header/HeaderH2';
import NavbarChoices from '../../atoms/Header/NavbarChoices';
import NavDownloadImage from '../../atoms/NavDownloadImage';
import NavDownloadLink from '../../atoms/NavDownloadLink';
import HeaderTextAligner from '../../molecules/HeaderMolecules/HeaderTextAligner';
// import Navbar from '../../molecules/HeaderMolecules/Navbar';
import './Header.css'


const Header = () => {
    return (
        <div  className="header">
            <HeaderTextAligner components={[<HeaderH1 componentKey={0} text={"Robert Walerczak"} />, <HeaderH2 componentKey={1} text={"Software Engineer"} />]} />
            <NavbarChoices name={'/images/menuIcon.png'} choices={[{"Name": "Home", "Link": ""}, {"Name": "Projects", "Link": "projects"}, {"Name": "About", "Link": "about"}, 
            {"Name": "Contact", "Link": "contact"}]} />
        </div>
    )
}

export default Header;

