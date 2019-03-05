import React from "react";

import {Copy} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

export default class Copyright extends React.Component {
    render(){
        return(
            
                    <Copy>
                        <FontAwesomeIcon size="lg" icon={faCopyright} />
                        <span>2019. All Rights Reserved By F3 Sports.</span>
                    </Copy>
                
        )
    }
}