import styled from "styled-components";

const Nav = styled.nav`
  overflow: hidden;
  background-color: #111;
  height:70px;

  a {
    color: #f2f2f2;
    text-align: center;
    padding: 14px 30px;
    text-decoration: none;
    font-family: 'Raleway',sans-serif;
    font-size: 20px;
    @media (max-width: 767px) {
      display:none;
    }
  }
  
  img {
    float: left;
    padding: 14px 16px;
    margin-left:50px;
  }

  .image {
    @media (max-width: 767px) {
      margin-left: -40px;
      display:block;
      padding: 0px 0px;
    }
  }

`;

const Parent = styled.div`
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index:10000;
}
`;

const Right = styled.div`
  padding-top:20px;
  padding-right:200px;
  float: right;

  span {
    padding-left:10px;
  }

`;


const Bars = styled.div`
display:none;
span {
  color:white;
}
@media (max-width: 767px) {
  display:inline-block;
  float:right;
  padding: 25px 25px;
}
`;

const DropDown = styled.div`
  // float: left;
  overflow: hidden;
  display:inline-table;
`;

const Content = styled.div`
  // display: ${props=> props.menu ? "block":"none"};
  position: fixed;
  background-color: #f9f9f9;
  min-width: 160px;
  margin-left: 30px;
  font-family: 'Raleway',sans-serif;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 10000;

  .services {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 14px;
    &:hover {
      background-color: #ddd;
    }
  }

  .link {
    padding:0px;
  }
  // ${DropDown}:hover & {
  //   display: ${props=> props.menu == true ? "none":"block"};
  // }
`;



export { Nav,Bars,Right,DropDown,Content,Parent};
