import React from "react";

import {Nav,NavUl,NavLi} from "./styled";

export default class Navigation extends React.Component {
  constructor(props) {
        super(props);

        this.state = {};

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }
  
  componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
  
  componentDidUpdate() {
        this.state.scroll > this.state.top ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }
  
  render() {
    return (
      <Nav>
        <NavUl>
          <NavLi>Home</NavLi>
          <NavLi>About</NavLi>
          <NavLi>Careers</NavLi>
          <NavLi>Contact</NavLi>
          <NavLi>Help</NavLi>
        </NavUl>
      </Nav>
    );
  }
}