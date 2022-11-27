import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { NavbarInterface } from '../../../molecules/HeaderMolecules/Navbar';
import './NavbarChoices.css';

interface NavbarItemsInterface {
    Name: string,
    Link: string,
}

interface NavbarInterface {
    name: string,
    choices: NavbarItemsInterface[]
}

const NavbarChoices = (props: NavbarInterface) => {
    const [open, setOpen] = React.useState(false);
    const [dropdownClassName, setDropdownClassName] = React.useState("navbar-choices-dropdown-container-hidden");
    let navbarChoicesContainer = document.getElementsByClassName('navbar-choices-container').item(0);

    useEffect(() => {
        navbarChoicesContainer?.classList.toggle('unclickable');
        setTimeout(() => {
            navbarChoicesContainer?.classList.toggle('unclickable');
        }, 400);
        if(open === true){
            setDropdownClassName("navbar-choices-dropdown-container");
            for(let i = 0; i < props.choices.length; i++){
                setTimeout(() => {
                    document.getElementsByClassName('navbar-choices-link-hidden').item(0)?.setAttribute('class', 'navbar-choices-link');
                }, 100*i);
            };
        } else {
            setDropdownClassName("navbar-choices-dropdown-container-hidden");
            for(let i = 0; i < props.choices.length; i++){
                setTimeout(() => {
                    document.getElementsByClassName('navbar-choices-link').item(0)?.setAttribute("class", 'navbar-choices-link-hidden');
                }, 100*i);
            };
        };
    }, [open]);

    return (
        <div key={0} className="navbar-choices-container">
            <img src={props.name} className="navbar-choices-icon" onClick={()=>{setOpen(!open)}}></img>
            <div id="dropdown-Container" className={dropdownClassName}>
            {props.choices.map((choice: any, index: any) => {
                return (
                    <NavLink onClick={()=>setOpen(!open)}className={"navbar-choices-link-hidden"} key={index} to={`/${choice.Link}`} >{choice.Name}</NavLink>
                )
            })}
            </div>
        </div>
    );
};

export default NavbarChoices;