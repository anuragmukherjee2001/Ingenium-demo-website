import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="Editorial" onClick={toggle}>Editorial</SidebarLink>
          <SidebarLink to="Prayukti" onClick={toggle}>Prayukti</SidebarLink>
          <SidebarLink to="Abhohoman" onClick={toggle}>Abhohoman</SidebarLink>
          <SidebarLink to="Gallery" onClick={toggle}>Gallery</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
