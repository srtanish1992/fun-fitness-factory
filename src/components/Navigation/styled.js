import styled from "styled-components";

const NavWrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  height: 50px;
  width: 100%;
  background-color: rgb(38, 50, 66);
`;

const NavBar = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translate(0px, -50%);
  height: 32px;
  width: 32px;
`;

const Logo = styled.img`
  vertical-align: middle;
`;

const Nav = styled.div`
  position: relative;
  display: inline-block;
  top: 20px;
  right: 50px;
`;

const NavItem = styled.a`
  padding-right: 50px;
  color: white;
  &:hover {
    color: white;
  }
  cursor: pointer;
`;

export { NavWrapper, Logo, LogoContainer, NavBar, Nav, NavItem };
