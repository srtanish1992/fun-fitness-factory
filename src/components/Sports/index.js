import React from "react";
import Asset from "../../utils/AssetService";
import {Grid,Row,Col} from "react-bootstrap";
import Service from "../Service";
import { GlobalState } from "../../utils/GlobalState";

export default class Sports extends React.Component {
    render(){
        return(
            <React.Fragment>
                <GlobalState>
                    {global =>
                        global.payload.pages && 
                        global.payload.pages.filter(page => Object.keys(page) == "services").map((page,index)=>
                            page.services.map((service,i)=>(
                                    i == 3 && <React.Fragment>
                                        <Service key={i} service={service}/>
                                    </React.Fragment>  
                                )   
                            )
                        )
                    }
                </GlobalState>
            </React.Fragment>
      
        )
    }
}