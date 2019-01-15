import React,{Component} from "react";
import Asset from "../../utils/AssetService";
import {Grid,Row,Col} from "react-bootstrap";



class ContactUs extends Component {

    componentDidMount(){
        
        let myLatLng = {lat: 18.489336, lng: 73.8721028};
      let map=new window.google.maps.Map(this.refs.map,{
        zoom: 14,
        center: 
            myLatLng
        
      });

      // Create a marker and set its position.
      let marker = new window.google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'F3 Sports Academy'
      });

    }
  
    render(){
      return (
      <React.Fragment>
            
        <div style={{textAlign:"center",marginBottom:"50px",marginTop:"90px"}}>
            <h2>Contact Us</h2>
        </div>
       
        
        <div style={{width:"60%",height:"300px",left:"-140px",transform: "translate(50%,-50%)",top:"170px"}} ref="map" />
        
       
        
        </React.Fragment>
        )
    }
  }

    


export default ContactUs;