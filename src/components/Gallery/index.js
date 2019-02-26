import React from "react";

import {Grid,Row,Col} from "react-bootstrap";
import Asset from "../../utils/AssetService";
import {ImageDiv,Title,Image} from "./styled";
import ReactTooltip from 'react-tooltip';

export default class Gallery extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ImageDiv>
                <Grid>
                <Title>
                    {this.props.content.title}  
                </Title>
                    {
                        this.props.content.images.map((img,index)=>(
                            
                                <Col md={4} sm={4} xs={12}>
                                <div
                                data-tip="Click Me!"
                                onClick={() => {
                                    this.props.handleItemClick(index);
                                  }}
                                >
                                    <Image src={Asset(img.url)}
                                    
                                    />
                                    </div>
                                    <ReactTooltip place="top" type="dark" effect="float"/> 
                                </Col>  
                            
                        ))
                    }
                    
                </Grid>  
            </ImageDiv>  
        )
    }
}