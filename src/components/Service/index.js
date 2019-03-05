import React from "react";
import Asset from "../../utils/AssetService";
import {Grid,Row,Col} from "react-bootstrap";

import {Image,Container,Text,Para,ServiceImg} from "./styled";

export default class Service extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <Container>
                    <Image src={Asset("assets/images/hero.jpg")}/>
                    <Text>
                        <h1>{this.props.service.title}</h1>
                    </Text>
                </Container>
            <Grid>
                <Col lg={6} md={12} sm={12} xs={12}>
                    <ServiceImg src={Asset(`assets/images/${this.props.service.image}`)}/>
                </Col>
                <Col lg={6} md={12} sm={12} xs={12}>
                    {
                        this.props.service.content.map((c,index)=>(
                            <Para>{c}</Para>
                        ))
                    }
                </Col>
             </Grid>
             </React.Fragment>   
        )
    }
}