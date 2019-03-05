import React from "react";

import {Grid,Row,Col} from "react-bootstrap";
import {Title,Image,Info,Name,Position,About,Description,TeamDiv,AboutDiv,ParentDiv1,ParentDiv2,Card1,Card2} from "./styled";
import Asset from "../../utils/AssetService"

export default class Team extends React.Component {
    render(){
        return(
            <Grid>
                <Title>
                  {this.props.content.title}  
                </Title>
                <ParentDiv1>
                <Row>
                {
                    this.props.content.team.map((t,index)=>(
                        
                   index <=2 &&
                        <Col lg={4} md={4} sm={4} xs={12}>
                        <Card1 className={index !== 0 ? (index== 1 ? "antriksh":"kushagra"):""}>
                            {/* <Info> */}
                            {/* <TeamDiv> */}
                                <Image width={280} height={280} src={Asset(`assets/logos/${t.image}`)}/>
                                <AboutDiv>
                                    <About>{t.about}</About>
                                </AboutDiv>
                                
                            {/* </TeamDiv> */}
                            {/* </Info> */}
                            <Description>
                                <Name>{t.name}</Name>
                                <Position>{t.position}</Position>
                            </Description>
                        </Card1>    
                        </Col>
                        
                    ))
                }
                </Row>
                </ParentDiv1>
                <ParentDiv2>
                <Row>
                {
                    this.props.content.team.map((t,index)=>(
                        
                    index >= 3 &&
                        <Col lg={4} md={4} sm={4} xs={12}>
                        <Card2 className={index==4 ? "adarsh" : "sushant"}>
                            {/* <Info> */}
                            {/* <TeamDiv> */}
                                <Image width={280} height={280} src={Asset(`assets/logos/${t.image}`)}/>
                                <AboutDiv>
                                    <About>{t.about}</About>
                                </AboutDiv>
                                
                            {/* </TeamDiv> */}
                            {/* </Info> */}
                            <Description>
                                <Name>{t.name}</Name>
                                <Position>{t.position}</Position>
                            </Description>
                        </Card2>    
                        </Col>
                        
                    ))
                }  
                </Row>
                </ParentDiv2>
            </Grid>    
        )
    }
}