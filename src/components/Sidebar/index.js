import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="editorial"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
          >
            Editorial
          </SidebarLink>
          <SidebarLink
            to="Abohoman"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
          >
            Abohoman
          </SidebarLink>
          <SidebarLink
            to="Prayukti"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
          >
            Prayukti
          </SidebarLink>
          <SidebarLink
            to="Gallery"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
          >
            Gallery
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
