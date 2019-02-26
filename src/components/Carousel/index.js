import React from "react";
import Asset from "../../utils/AssetService";

import { Slider, Slide, Button} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronCircleLeft,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";

export default class Carousel extends React.Component {

  constructor() {
    super();
    this.state = {
      activeSlide: 0,
      direction: "right"
    };
  }

  // lets you go to the next or previous slide depending upon the direction
  goToSlide = (slide, dir) => {
    this.setState({
      direction: dir,
      activeSlide: slide
    });
  };

    render(){
      let dim = {
        width: "100%",
        height: 780
      };

      

        return(
          <React.Fragment>
          <Slider
          width={dim.width}
          height={dim.height}
        >
        {
          
            <Slide
            width={dim.width}
            height={dim.height}
            activeSlide={this.state.activeSlide}
            className={`animated  ${
              this.state.direction === "left" ? "slideInLeft" : "slideInRight"
            }`}
            >
            {
              this.state.activeSlide == 0 ? (
                <img width="100%" height={780} src={(Asset(`assets/images/IMG_1956.jpg`))} />) :
                
              <img width="100%" height={780} src={(Asset(`assets/images/IMG_2314.jpg`))} />
            }
              
            </Slide> 
        
        }
        
        </Slider>
        <Button
        prev
        onClick={() => this.goToSlide(this.state.activeSlide - 1, "left")}
      >
        <FontAwesomeIcon size="6x" icon={faChevronCircleLeft} />
      </Button>
      <Button
      onClick={() =>
        this.goToSlide(this.state.activeSlide + 1, "right")
      }
    >
      <FontAwesomeIcon size="6x" icon={faChevronCircleRight} />
    </Button>
    </React.Fragment>
        )
    }
}