import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from "./SidebarElements";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="Editorial">Editorial</SidebarLink>
          <SidebarLink to="Prayukti">Prayukti</SidebarLink>
          <SidebarLink to="Abhohoman">Abhohoman</SidebarLink>
          <SidebarLink to="Gallery">Gallery</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
