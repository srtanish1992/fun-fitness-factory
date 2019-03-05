import React from "react";
import {Grid,Row,Col} from "react-bootstrap";
import {Title,Image,Name,Position,About,Description,TeamDiv,AboutDiv,ParentDiv,Card} from "./styled";
import Asset from "../../utils/AssetService"
export default class Founder extends React.Component {
    render(){
        return(
            <Grid>
                <Title>
                  {this.props.content.title}  
                </Title>
                <ParentDiv>
                {
                    this.props.content.founders.map((t,index)=>(
                        
                    
                        <Col lg={4} md={4} sm={4} xs={12}>
                            <Card className={index == 1 ? "swati" : "satish"}>
                                    {/* <TeamDiv> */}
                                        <Image width={280} height={280} src={Asset(`assets/logos/${t.image}`)}/>
                                        <AboutDiv>
                                            <About>{t.about}</About>
                                        </AboutDiv>
                                    {/* </TeamDiv> */}
                                <Description>
                                    <Name>{t.name}</Name>
                                    <Position>{t.position}</Position>
                                </Description>
                            </Card>    
                        </Col>
                        
                    ))
                }
                </ParentDiv>  
            </Grid>    
        )
    }
}