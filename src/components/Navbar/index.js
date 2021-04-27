import React from "react";
import {Nav, NavbarContainer, NavLogo} from "./NavbarElements";

const Navbar = () =>{
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo>Ingenium</NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;