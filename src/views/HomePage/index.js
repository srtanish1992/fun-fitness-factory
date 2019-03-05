import React,{Component} from "react";
import { GlobalState } from "../../utils/GlobalState";
import { HomePageImage, Image, DivBlock } from "./styled";
import { Grid, Col, Row } from "react-bootstrap";
import Carousel from "../../components/Carousel";
import AboutUs from "../../components/AboutUs";
import Navigation from "../../components/Navigation";
import Team from "../../components/Team"
import Gallery from "../../components/Gallery";
import LightBox from "../../components/LightBox";
import Footer from "../../components/Footer";
import Founder from "../../components/Founder";
import Vision from "../../components/Vision";
import Features from "../../components/Features";



export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      photoIndex: 0,
      isOpen: false,
    }
  }

  
  handleClose = (close) => {
    this.setState({
      isOpen: close
    });
  };

  render() {
    return (
      <React.Fragment>
        
        <Carousel />
        <GlobalState>
          {global =>
            global.payload.pages && 
            global.payload.pages.filter(page => Object.keys(page) == "homePage").map((page,index)=>
                page.homePage.map((hp,key)=>
                    hp.sections.map((section,index)=>
                       
                       (
                        <React.Fragment>
                           {this.state.isOpen && section.id == 6 && (
                              <LightBox
                                content={section.images}
                                activeIndex={this.state.photoIndex}
                                onClose={this.handleClose}
                              />
                            )}
                          
                            {
                              section.id == 1 && <AboutUs content={section}/> 
                            }

                            {
                                section.id == 2 &&
                                <Vision content={section}/>
                              }
                              {
                                section.id == 3 &&
                                <Features content={section}/>
                              }
                              {
                                section.id == 4 &&
                                <Founder content={section}/>
                              }
                              {
                                section.id == 5 &&
                                <Team content={section}/>
                              }
                                 {
                                   section.id == 6 &&
                                   <Gallery 
                              content={section} 
                              handleItemClick={i =>
                                this.setState({ photoIndex: i, isOpen: true })}
                              
                              />
                                 } 
                            
                            
                            {/* {
                              section.id == 7 && <Footer content={section}/>
                            } */}
                            
                          
                          
                        </React.Fragment>  
                       )
                       
                           
                        
                             
                        
                          
                    )
                )
            )
          }
        </GlobalState>
        
      </React.Fragment>
    );
  }
}
