import React from "react";
import {Grid,Row,Col} from "react-bootstrap";
import Asset from "../../utils/AssetService"
import {Title,Image,ContentDiv,Para,Icon,IconDiv} from "./styled";

export default class Vision extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Grid>
                <Title>
                  {this.props.content.title}  
                </Title>
                
                
                    { this.props.content.paras.map((para,index)=>(
                        <Row>
                            <Col sm={2} md={2} lg={2} xs={12}>
                                <IconDiv className={index==0 ? "first" : ""}>
                                    <Icon width="100px" height="100px" src={Asset(`assets/icons/${para.icon}`)}/>
                                </IconDiv>
                            </Col>
                            <Col sm={2} md={2} lg={10} xs={12}>
                                <ContentDiv>
                                    <Para>{para.content}</Para>
                                </ContentDiv>
                            </Col>   
                        </Row> 
                    )) 
                    }
                    {/* <Col lg={5} xs={12}>
                        <Image width="100%" height={400} src={Asset("assets/images/vision2.jpg")} />
                    </Col> */}
                
            </Grid>    
        )
    }
}