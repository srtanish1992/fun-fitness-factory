import React from "react";
import Asset from "../../utils/AssetService";
import {Grid,Row,Col} from "react-bootstrap";
const Vision = () => {
    return(
        <React.Fragment>
    <div style={{textAlign:"center",marginBottom:"50px"}}>
        <h2>Our Vision</h2>
    </div>
    <div>
    <Row>
        <Col md={6}>
    <div style={{height:"300px",width:"450px",backgroundImage: `${`url(${Asset("assets/logos/vision.jpg")})`}`,backgroundRepeat: "no-repeat",
backgroundPosition: "center center",backgroundSize: "cover",marginLeft:"180px"}}>
    </div>
        </Col>
        <Col md={6}>
    <div style={{display:"flex",flexDirection: "column",width:"500px"}}>
        <div>To identify, develop talent from all parts of the country and to help them excel at the international stage under our Long Term Athlete Development Programme</div>
        <div  style={{paddingTop: "30px"}}>To create awareness about and prevent burnout in Sport. A high percentage of young athletes suffer mental or physical burnout and opt of sport despite having the talent to excel. </div>
        <div  style={{paddingTop: "30px"}}>To facilitate a career in Sports by focusing on Athlete Career and Education which would include their life post-retirement. </div>
        <div  style={{paddingTop: "30px"}}>To create a culture of sporting excellence on which the society can thrive upon. </div>
    </div>
    </Col>
    </Row>
    </div>
    </React.Fragment>
)

    
}

export default Vision;