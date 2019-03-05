import React from "react";

import Asset from "../../utils/AssetService";
import {Grid,Row,Col} from "react-bootstrap";
import {Title,Feature,ParentDiv} from "./styled";

export default class Features extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const features = Object.entries(this.props.content.features);
        console.log(features);
        return(
            <Grid>
                <Title>
                  {this.props.content.title}  
                </Title>
                <ParentDiv>
                {
                    features && features.map((feature,index)=>(
                        <div className={index == 0 ? "" : "feature"}> 
                            <Row>
                                {
                                    feature && feature.map((f,j)=>(
                                        j == 1 &&
                                            f.map((fe,i)=>(
                                                <React.Fragment>
                                                    <Col lg={6} md={6} sm={6} xs={12}>
                                                        
                                                            <Feature key={i} className={index==0 && i==0 ? "" : "f"}>
                                                                <h4>{fe.heading}</h4>
                                                                <div>{fe.content}</div>
                                                            </Feature>  
                                                              
                                                    </Col>
                                                </React.Fragment>
                                            ))  
                                    ))
                                }
                            </Row>
                        </div>
                    ))
                }
            </ParentDiv>
        </Grid>
        )
    }
}