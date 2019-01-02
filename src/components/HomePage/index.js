import React from "react";
import { GlobalState } from "../../utils/GlobalState";
import { HomePageImage, Image, DivBlock,StyledJumbotron } from "./styled";
import Vision from "../Vision";
import Trainers from "../Trainers";
import { Jumbotron,Button } from 'reactstrap';
import {Modal,Nav,NavItem} from "react-bootstrap";
export default class HomePage extends React.Component {
  constructor(){
    super();
    this.state={
      modal:false
    }
  }

  toggle = () =>{
   this.setState({
      modal:!this.state.modal
    })
  }
  render() {
    return (
      <React.Fragment>
        {/* <HomePageImage>
          <Image />
        </HomePageImage> */}
        <StyledJumbotron>
          <div style={{textAlign:"center"}}>
        <h1 style={{color:"white"}}>Fun Fitness Factory</h1>
        <p style={{color:"white"}}>Being the first of its kind over all Sports Science training in Pune, F3 Sports is revolutionizing the way we approach Sports in Pune.</p>
       <p style={{color:"white"}}> Our team of Sports Science experts is introducing scientific methods and processes for developing athletes and achieving sporting excellence. </p>
        <p >
          <Button onClick={this.toggle}>Read More</Button>
        </p>
        </div>
        
<div>
        <Modal  show={this.state.modal} onHide={this.toggle}>
        <Modal.Header closeButton>
            <Modal.Title>Fun Fitness Factory</Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <p>Being the first of its kind over all Sports Science training in Pune, F3 Sports is revolutionizing the way we approach Sports in Pune. Our team of Sports Science experts is introducing scientific methods and processes for developing athletes and achieving sporting excellence. </p>
          <p>These 8 experts include highly qualified and experienced Sport Physicians, Sports Psychologist, Strength & Conditioning trainers, Physiotherapists, Sports Nutritionist and Biomechanist along with other Sports Science support staff who work together as a unit to help athletes strive for excellence. </p>
          <p>Our flagship programme is the Long Term Athlete Development (LTAD) programme which aims at identifying and developing young sporting talent in different sports using ahighly scientific approach. Our High Performance Model (HPM) of Athlete Development isutilized by senior and professional athletes as well as recreational athletes passionate about their respective sports. </p>
          </Modal.Body>
          </Modal>
          </div>
<div style={{textAlign:"center",marginTop:"260px"}}>
          <span style={{color:"white",paddingRight:"40px"}}>Home</span>
          <span style={{color:"white",paddingRight:"40px"}}>About</span>
          <span style={{color:"white",paddingRight:"40px"}}>Services</span>
          <span style={{color:"white",paddingRight:"40px"}}>Gallery</span>
          <span style={{color:"white",paddingRight:"40px"}}>Team</span>
          <span style={{color:"white",paddingRight:"40px"}}>News</span>
          <span style={{color:"white",paddingRight:"40px"}}>Mail Us</span>
          
        </div>
        
          </StyledJumbotron>
          
          <Vision/>
          <Trainers/>
        
        
        
        {/* 
        <GlobalState>
          {global =>
            global.payload.steps &&
            global.payload.steps.map((step, index) =>
              step.sections.map(
                section =>
                  section.layout === "formBlock" ? (
                    section.paras.map((para, index) => (
                      <React.Fragment>
                        <DivBlock>
                          {index === 0 ? (
                            <h3 key={index}>{section.title}</h3>
                          ) : (
                            ""
                          )}
                          <div>{para.para}</div>
                        </DivBlock>
                      </React.Fragment>
                    ))
                  ) : (
                    <React.Fragment>
                      {section.lists.map((list, index) => (
                        <React.Fragment>
                          {index === 0 ? (
                            <React.Fragment>
                              <h3 key={index}>{section.title}</h3>
                              <h4>{section.subheader}</h4>
                            </React.Fragment>
                          ) : (
                            ""
                          )}
                          <li>{list.list}</li>
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  )
              )
            )
          }
        </GlobalState> */}
      </React.Fragment>
    );
  }
}
