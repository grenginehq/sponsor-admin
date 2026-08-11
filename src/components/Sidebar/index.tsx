import { routes } from "../../constants";
import { Icon } from "../Icon";
import {
  SidebarLink,
  SidebarLinkContainer,
  SidebarLinksContainer,
  StyledSidebar,
} from "./styles";

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <Icon icon="logo" />
      <SidebarLinksContainer>
        {routes?.map((route, index) => {
          return (
            <SidebarLinkContainer key={`link_${index + 1}`}>
              <SidebarLink to={route.path}>
                <Icon icon={route?.icon} /> {route.text}
              </SidebarLink>
            </SidebarLinkContainer>
          );
        })}
      </SidebarLinksContainer>
    </StyledSidebar>
  );
};
