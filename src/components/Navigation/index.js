import React from "react";

import {Nav,Bars,Right,DropDown,Content,Parent} from "./styled";
import Asset from "../../utils/AssetService";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../SideBar";

export default class Navigation extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
          sideBar:false,
          menu:false
        };
    }
    
    
    myFunction = () =>{
      console.log("scrolling");
      let navbar = document.getElementById("navbar");
      let sticky = navbar.offsetTop;

      
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      
    }
    

    componentDidMount(){
      window.onscroll = () => this.myFunction();
    }

    openSideBar = () => {
      this.setState({sideBar:!this.state.sideBar})
    }

    toggle = () =>{
      this.setState({
        menu:!this.state.menu
      })
    }
  
  render() {
    return (
      <Parent>
      <Nav id="navbar">
        {
          this.state.sideBar && <SideBar links = {this.props.links} sideBar={this.state.sideBar}/>
        }
        
        <Bars onClick={()=>this.openSideBar()} className= "bars">
          <span><FontAwesomeIcon size="lg" icon={faBars}/></span>  
        </Bars>

        <Link to={"/"} className="image">
          <img width={70} height={70} src={Asset("assets/logos/f3.jpg")}/>
        </Link>  
          <Right className="topnav-right">
          <Link to={"/"}>
            <a>About</a>
          </Link>
          <DropDown onClick={this.toggle}>
            <a>Services<span><FontAwesomeIcon icon={faChevronDown}/></span></a>
            <Content menu={this.state.menu}>
              {
                this.state.menu && this.props.links.map((link,index)=>(
                    <Link  className="link" onClick={this.toggle} to={link.route}>
                      <a className="services">{link.label}</a>
                    </Link>
                ))
              } 
            </Content>  
          </DropDown>  
            {/* <a>Gallery</a>
            <a>Contact Us</a> */}
          </Right>
        </Nav>
        </Parent>
    );
  }
}