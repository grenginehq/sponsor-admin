import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import {
  background,
  black,
  InstrumentSans,
  primary,
  secondary03,
  secondary17,
} from "../../styles/abstracts/colors";

export const StyledSidebar = styled.aside`
  display: flex;
  padding: 24px 16px 32px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-right: 1px solid ${secondary17};
  background: ${background};
  height: 100vh;
  overflow: hidden;
`;

export const SidebarLinkContainer = styled.li`
  display: flex;
`;

export const SidebarLink = styled(NavLink)`
  color: ${black};
  font-family: ${InstrumentSans};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.14px;
  text-transform: capitalize;
  display: flex;
  gap: 4px;
  align-items: center;
  width: 200px;
  padding: 8px 12px;
  border-radius: 8px;
  background: transparent;
  transition: all 0.5s ease-in-out;

  & svg path {
    fill: ${black};
  }

  &.active svg path {
    fill: ${primary};
  }

  &:hover svg path {
    fill: ${primary};
  }

  &.active {
    background-color: ${secondary03};
    color: ${primary};
  }

  &:hover {
    background-color: ${secondary03};
    color: ${primary};
  }
`;

export const SidebarLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
`;
