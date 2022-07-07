import H1 from '../../atoms/H1';
import H2 from '../../atoms/H2';
import Navbar from '../../molecules/Navbar';
import './Header.css'


const Header = () => {
    return (
        <div  className="header">
            <H1 text={"Robert Walerczak"} />
            <H2 text={"Software Engineer"} />
            <Navbar />
        </div>
    )
}

export default Header;