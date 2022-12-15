import { useNavigate } from 'react-router-dom';
import GoUpButton from '../../atoms/GoUpButton';
import HeaderH1 from '../../atoms/Header/HeaderH1';
import HeaderH2 from '../../atoms/Header/HeaderH2';
import NavbarChoices from '../../atoms/Header/NavbarChoices';
import HeaderTextAligner from '../../molecules/HeaderMolecules/HeaderTextAligner';

import './Header.css'

const Header = () => {
    const navigate = useNavigate();

    const initiateObserver = () => {
        const goUpButton = document.querySelector('.go-up-button');
        const header = document.querySelector('#header');
        const observer = new IntersectionObserver(entries => {
            entries[0].isIntersecting ? goUpButton?.classList.remove("visible") : goUpButton?.classList.add("visible");
        });
        observer.observe(header!);
    }

    return (
        <div id="header" className="header" onLoad={initiateObserver}>
            <GoUpButton />
            <HeaderTextAligner components={[<HeaderH1 componentKey={0} text={"Robert Walerczak"} onClickFunction={() => navigate('/')} />, <HeaderH2 componentKey={1} text={"Software Engineer"} onClickFunction={() => navigate('/')} /> ]}/>
            <NavbarChoices name={'/images/menuIcon.png'} choices={[{"Name": "Home", "Link": ""}, {"Name": "Projects", "Link": "projects"}, {"Name": "About", "Link": "about"}, 
            {"Name": "Contact", "Link": "contact"}]} />
        </div>
    )
}

export default Header;

