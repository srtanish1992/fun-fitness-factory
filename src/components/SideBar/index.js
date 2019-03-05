import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {Slider} from "./styled";
import { Link } from "react-router-dom";

export default class SideBar extends React.Component {

    constructor(props){
        super(props);
        this.state={
            sideBar: this.props && this.props.sideBar,
            dd1:false,
            dd2:false,
            menu:false
        }
    }

   closeSideBar = () => {
        this.setState({sideBar:!this.state.sideBar});
    } 

    toggle = () =>{
        console.log("toggle");
        this.setState({
          menu:!this.state.menu
        })
      }

    render(){
        return (
            <React.Fragment>
                {
                    this.props.sideBar && <Slider sideBar={this.state.sideBar} dd1={this.state.dd1} dd2={this.state.dd2} class="sidenav">
                        <a className="closeBtn"><FontAwesomeIcon size="xs" onClick={()=>this.closeSideBar()} icon={faTimes}/></a>
                        <Link className="link" to={"/"}>
                            <a>About</a>
                        </Link>
                        <a onClick={this.toggle}>
                            Services<span><FontAwesomeIcon size="lg" icon={faCaretDown}/></span>
                        </a>
                        <div className="dropdown-container2">
                        {
                            this.state.menu && this.props.links.map((link,index)=>(
                              <Link  className="link" onClick={this.toggle} to={link.route}>
                                <a className="services">{link.label}</a>
                              </Link>
                            ))
                          } 
                        </div> 
                        <a>Gallery</a>
                        <a>Contact Us</a>
                    </Slider>
                }
            </React.Fragment>   
        )
    }
}