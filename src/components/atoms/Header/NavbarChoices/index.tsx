import React from 'react';
import { NavLink } from 'react-router-dom';
// import { NavbarInterface } from '../../../molecules/HeaderMolecules/Navbar';
import './NavbarChoices.css';

interface NavbarInterface {
    name: string,
    choices: JSX.Element[]
}

const NavbarChoices = (props: any) => {
    const [open, setOpen] = React.useState(false);
    return (
        <div key={0} className="navbar-choices-container" onClick={()=>{setOpen(!open)}}>
            <img src={props.name} className="navbar-choices-icon" onClick={()=>{setOpen(!open)}}></img>
            {open && props.choices.map((choice: any, index: any) => {
                return (
                    // <div key={index} className="navbar-choices-link" onClick={()=>{}}>
                        <NavLink className="navbar-choices-link" key={index} to={`/${choice.Link}`}>{choice.Name}</NavLink>
                    // </div>
                )
            })}
        </div>
    );
};

export default NavbarChoices;