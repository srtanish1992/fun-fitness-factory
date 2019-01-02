import React from "react";
import Asset from "../../utils/AssetService";
import {Grid,Row,Col} from "react-bootstrap";
const Trainers = () => {
    return(
        <React.Fragment>
            
    <div style={{textAlign:"center",marginBottom:"50px",marginTop:"60px"}}>
        <h2> Our Trainers</h2>
    </div>
    
        <div style={{position:"absolute"}}>
            <img style={{border:"solid 1px lightgrey",position:"absolute",top: "135px",
    left: "510px",transform: "translate(50%,-50%)"}} width="250px" height="250px" src={Asset("assets/logos/placeholder.png")}/>
            <div style={{color:"white",backgroundColor:"black",height:"50px",width:"250px",position:"absolute",top:"210px",left:"635px"}}><span style={{fontSize:"20px",position:"absolute",top:"15px",left:"100px"}}>Anish</span></div>
        </div>
   
    
    </React.Fragment>
)

    
}

export default Trainers;