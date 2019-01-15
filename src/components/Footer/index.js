import React from "react";
import {Grid,Row,Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap,faPhoneVolume, faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <React.Fragment>
        <div style={{backgroundColor:"#212121",marginTop:"100px"}}>
        <React.Fragment>
            <Grid>
        <Row>
            <Col>
            <h4 style={{fontSize:"24px",color:"#ffffff",textTransform: "uppercase",fontWeight: "600",marginTop:"75px"}}>Newsletter</h4>
            <input type="email" name="Email" placeholder="Enter Your Email..." required="" />
            <input type="submit" value="Send" />
            </Col>
        </Row>
        </Grid>
        </React.Fragment>
        <div style={{marginTop:"130px"}}>
        <Grid>
            <Row>
                <Col md={5}>
                    <div style={{fontSize:"19px",color:"#1cf1f1",textTransform: "uppercase",fontWeight: "600"}}>About Us</div>
                    <div style={{fontSize: "14px", color: "#bfbfbf",paddingTop:"10px"}}>Proin ultrices hendrerit massa, vitae convallis diam aliquam sit amet. Sed sit amet nulla vestibulum,
accumsan erat sed, aliquet arcu. Quisque aliquam nunc a orci aliquam, nec rhoncus eros blandit. Pellentesque blandit quis nunc porta luctus.</div>
                </Col>
                <Col md={4}>
                    <div style={{fontSize:"19px",color:"#1cf1f1",textTransform: "uppercase",fontWeight: "600"}}>Contact Info</div>
                    <div style={{fontSize: "14px", color: "#bfbfbf",paddingTop:"10px"}}><FontAwesomeIcon icon={faMap} />&nbsp;1234k Avenue, 4th block, Kingsport City.</div>
                    <div style={{fontSize: "14px", color: "#bfbfbf",paddingTop:"10px"}}><FontAwesomeIcon icon={faEnvelope} />&nbsp;info@example.com</div>
                    <div style={{fontSize: "14px", color: "#bfbfbf",paddingTop:"10px"}}><FontAwesomeIcon icon={faPhoneVolume} />&nbsp;+1234 567 567</div>
                </Col>
                <Col md={3}>
                    <div style={{fontSize:"19px",color:"#1cf1f1",textTransform: "uppercase",fontWeight: "600"}}>Navigation</div>
                    <ul style={{padding:"0",margin:"0"}}>
                        <li style={{fontSize: "14px", color: "#bfbfbf",paddingTop:"10px",listStyleType: "none"}}><FontAwesomeIcon icon={faAngleRight} />&nbsp;Home</li>
                        <li style={{fontSize: "14px", color: "#bfbfbf",paddingTop:"10px",listStyleType: "none"}}><FontAwesomeIcon icon={faAngleRight} />&nbsp;About</li>
                        <li style={{fontSize: "14px", color: "#bfbfbf",paddingTop:"10px",listStyleType: "none"}}><FontAwesomeIcon icon={faAngleRight} />&nbsp;Services</li>
                        <li style={{fontSize: "14px", color: "#bfbfbf",paddingTop:"10px",listStyleType: "none"}}><FontAwesomeIcon icon={faAngleRight} />&nbsp;Gallery</li>
                        <li style={{fontSize: "14px", color: "#bfbfbf",paddingTop:"10px",listStyleType: "none"}}><FontAwesomeIcon icon={faAngleRight} />&nbsp;Team</li>
                        <li style={{fontSize: "14px", color: "#bfbfbf",paddingTop:"10px",listStyleType: "none"}}><FontAwesomeIcon icon={faAngleRight} />&nbsp;News</li>
                        <li style={{fontSize: "14px", color: "#bfbfbf",paddingTop:"10px",listStyleType: "none"}}><FontAwesomeIcon icon={faAngleRight} />&nbsp;Mail Us</li>
                    </ul>
                </Col>
                </Row>
            </Grid>
            </div>
    </div>
    </React.Fragment>
    )
        
    
}

export default Footer;