import React from "react";

import {Grid,Row,Col} from "react-bootstrap";
import {Title,Image,Info,Name,Position,About,Description,TeamDiv,AboutDiv} from "./styled";
import Asset from "../../utils/AssetService"

export default class Team extends React.Component {
    render(){
        return(
            <Grid>
                <Title>
                  {this.props.content.title}  
                </Title>
                {
                    this.props.content.team.map((t,index)=>(
                        
                    
                        <Col md={3} sm={3} xs={12}>
                        <Info>
                        <TeamDiv>
                            <Image width={250} height={280} src={Asset(`assets/logos/${t.image}.jpg`)}/>
                            <AboutDiv>
                                <About>{t.about}</About>
                            </AboutDiv>
                            
                            </TeamDiv>
                        </Info>
                        <Description>
                            <Name>{t.name}</Name>
                            <Position>{t.position}</Position>
                        </Description>
                        </Col>
                        
                    ))
                }
                    
            </Grid>    
        )
    }
}