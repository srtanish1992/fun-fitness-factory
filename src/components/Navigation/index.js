import React from "react";
import Asset from "../../utils/AssetService";
import {
  NavWrapper,
  Logo,
  LogoContainer,
  NavBar,
  Nav,
  NavItem
} from "./styled";

export default class Navigation extends React.Component {
  render() {
    return (
      <NavWrapper>
        <NavBar>
          <LogoContainer>
            <Logo
              src={Asset("assets/logos/logoff3.jpg")}
              width="32"
              height="32"
            />
          </LogoContainer>
          <Nav className="pull-right">
            <NavItem>About</NavItem>
            <NavItem>Our Vision</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>Contact</NavItem>
          </Nav>
        </NavBar>
      </NavWrapper>
    );
  }
}
