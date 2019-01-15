import React from "react";
import {Grid,Row,Col} from "react-bootstrap";
import {Trainerinfo,TrainerName,TrainerCard,TrainerImage,TrainerTitle,TrainerSocial} from "./styled"
import Asset from "../../utils/AssetService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faInstagram, faFacebookF} from '@fortawesome/fontawesome-free-brands';

const Trainers = () => {
    return(
        <React.Fragment>
            
    <TrainerTitle >
        <h2> Our Trainers</h2>
    </TrainerTitle>
    <Grid>
        <Row>
            <Col>
                <TrainerCard >
                <TrainerImage>
                    <img src={Asset("assets/logos/placeholder.png")} width="200px" height="200px"/>
                    <TrainerSocial>
                        <ul>
                            <li><div className="facebook"><span><FontAwesomeIcon icon={faFacebookF} color="white" size="lg"  /></span></div></li>
                            <li><div className="instagram"><span><FontAwesomeIcon icon={faInstagram}  color="white" size="lg"/></span></div></li>
                        </ul>
                        
                    </TrainerSocial>
                </TrainerImage>
                <Trainerinfo >
                    
                        <TrainerName ><h4>Anish</h4></TrainerName>
                    </Trainerinfo>
                </TrainerCard>
        </Col>
        </Row>
    </Grid>
    
    </React.Fragment>
)

    
}

export default Trainers;