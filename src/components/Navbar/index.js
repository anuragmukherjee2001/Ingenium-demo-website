import React from "react";
import { FaBars } from "react-icons/fa";
import {animateScroll as scroll} from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {

  const toHome = () =>{
    scroll.scrollToTop();
  }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={toHome}>TechFreak</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks
                to="editorial"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="Abohoman"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Stories
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="Prayukti"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Blogs
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="Gallery"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Gallery
              </NavLinks>
            </NavItems>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
