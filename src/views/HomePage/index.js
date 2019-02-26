import React from "react";
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
import Copyright from "../../components/Copyright";
import ScrollButton from "../../components/ScrollUpButton"
import { StickyContainer, Sticky } from 'react-sticky';

export default class HomePage extends React.Component {
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
        <StickyContainer>
        <Sticky>
                            {({
                              style,
                  
                              // the following are also available but unused in this example
                              isSticky,
                              wasSticky,
                              distanceFromTop,
                              distanceFromBottom,
                              calculatedHeight
                            }) => (
                              <header style={style}>
                                <Navigation/>
                              </header>
                            )}
                          </Sticky>
                            <Carousel />
        <GlobalState>
          {global =>
            global.payload.pages && 
            global.payload.pages.filter(page => Object.keys(page) == "homePage").map((page,index)=>
                page.homePage.map((hp,key)=>
                    hp.sections.map((section,index)=>
                       
                       (
                        <React.Fragment>
                           {this.state.isOpen && section.id == 3 && (
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
                                <Team content={section}/>
                              }
                                 {
                                   section.id == 3 &&
                                   <Gallery 
                              content={section} 
                              handleItemClick={i =>
                                this.setState({ photoIndex: i, isOpen: true })}
                              
                              />
                                 } 
                            
                            
                            {
                              section.id == 4 && <Footer content={section}/>
                            }
                            
                          
                          
                        </React.Fragment>  
                       )
                       
                           
                        
                             
                        
                          
                    )
                )
            )
          }
        </GlobalState>
        <Copyright/>
        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        </StickyContainer>
      </React.Fragment>
    );
  }
}
