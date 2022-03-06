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
            About
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
            Stories
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
            Blogs
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
