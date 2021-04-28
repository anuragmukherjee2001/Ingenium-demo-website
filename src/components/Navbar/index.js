import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>Ingenium</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to="editorial">Editorial</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="Prayukti">Prayukti</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="Abhohoman">Abhohoman</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="Gallery">Gallery</NavLinks>
            </NavItems>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
