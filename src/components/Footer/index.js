import React from "react";
import Asset from "../../utils/AssetService";
import {Grid,Row,Col} from "react-bootstrap";
import { Slider, Slide, Button} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faMapMarker,
  faMapMarked,
  faPhoneVolume,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import {Logo,FooterDiv,Contact,Social,Copy} from "./styled";

import {faFacebook,faInstagram, faFacebookF} from "@fortawesome/free-brands-svg-icons"

export default class Footer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <FooterDiv>
                <Grid>
                    <Col md={4} sm={4} xs={12}>
                        <Logo src={Asset(this.props.content.logo)}/>
                    </Col>
                    <Col md={8} sm={8} xs={12}>
                        <h2>Information</h2>
                    {
                        this.props.content.info.map((i,index)=>(
                            <React.Fragment>
                                {i.type == "normal" && 
                                <Contact>
                                    
                                <span className={i.icon}>
                                <FontAwesomeIcon size="lg" icon={i.icon == "faMapMarker" ? faMapMarker : (i.icon == "faEnvelope" ? faEnvelope : faPhoneVolume)} />
                                </span>  
                                  <span>{i.content}</span>  
                                </Contact>
                                }
                                {i.type == "social" && 
                                <Social>
                                <span className={i.icon}><FontAwesomeIcon size="lg" icon={i.icon == "faFacebook" ? faFacebookF : faInstagram} />
                                </span>
                                </Social>
                            }
                            </React.Fragment>
                        ))
                    }
                        
                    </Col>
                      
                </Grid>
                
            </FooterDiv>    
        )
    }
}