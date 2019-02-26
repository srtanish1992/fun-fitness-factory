import styled from "styled-components";

const Nav = styled.nav`
width: 100%;
margin: 0;
top: 0;
background-color: rgba(0, 0, 0, 1);
color: #ccc;

.fixed-nav {
  position: fixed;
}
`;

const NavUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding-right: 150px;
  height:80px;
`;

const NavLi = styled.li`
  height: 100%;
  padding: 27px 34px;
  text-align: center;
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-size:20px;
  li&:hover {
    background: #848484;
    color: #212121;
    cursor:pointer;
  }
`;

export { Nav,NavUl,NavLi };
