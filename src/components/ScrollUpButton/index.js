import React from "react";

import {Button} from "./styled";
import ScrollToTop from "react-scroll-up";
import ReactTooltip from 'react-tooltip';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";

export default class ScrollButton extends React.Component {
    render () {
        return (
            <ScrollToTop showUnder={160}>
                
                    <Button data-tip="Back to top">
                        <span ><FontAwesomeIcon size="lg" icon={faChevronUp} /></span>
                    </Button>
                    <ReactTooltip place="top" type="dark" effect="float"/>   
            </ScrollToTop>
            
        )
     }
  } 