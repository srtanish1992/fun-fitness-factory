import React from "react";
import Asset from "../../utils/AssetService";

import { Slider, Slide,Dots} from "./styled";
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
      slideIndex : 1,
      autSlideIndex:0
    };

  }

   plusSlides=(n)=> {
    this.showSlides(this.state.slideIndex += n);
  }
  
   currentSlide=(n)=> {
    this.showSlides(this.state.slideIndex = n);
  }

  showSlides = (n) => {

    let i;
    let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.state.slideIndex = 1} 
    if (n < 1) {this.state.slideIndex = slides.length} 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[this.state.slideIndex-1].style.display = "block"; 
    // dots[slideIndex-1].className += " active";

  }

  autoShowSlides = () => {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      // let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
      }
      this.state.autSlideIndex++;
      if (this.state.autSlideIndex > slides.length) {this.state.autSlideIndex = 1}
      // for (i = 0; i < dots.length; i++) {
      //   dots[i].className = dots[i].className.replace(" active", "");
      // } 
      slides && ( slides[this.state.autSlideIndex-1] && (slides[this.state.autSlideIndex-1].style.display = "block"));
      // dots[autSlideIndex-1].className += " active"; 
      setTimeout(this.autoShowSlides, 4000); // Change image every 4 seconds
    }

  componentDidMount() {
    this.autoShowSlides();
    this.showSlides(this.state.slideIndex);
  }

  render(){
      
      let images = ["IMG_2314.JPG", "6.JPG", "cricket.jpeg", "IMG_1956.JPG"];

        return(
          <React.Fragment>
            <Slider>
              {
                images.map((img,index)=>(
                  <div className="mySlides fade">
                    <img width="100%" height="900px" src={Asset(`assets/images/${img}`)}/>
                  </div>
                ))
              }
              <a className="prev" onClick={()=>this.plusSlides(-1)}><FontAwesomeIcon size="lg" icon={faChevronCircleLeft} /></a>
              <a className="next" onClick={()=>this.plusSlides(1)}><FontAwesomeIcon size="lg" icon={faChevronCircleRight} /></a>
            </Slider>
              <br/>
            {/* <Dots>
              <span className="dot" onClick={()=>this.currentSlide(1)}></span> 
              <span className="dot" onClick={()=>this.currentSlide(2)}></span> 
              <span className="dot" onClick={()=>this.currentSlide(3)}></span>
              <span className="dot" onClick={()=>this.currentSlide(4)}></span>  
            </Dots>               */}
          </React.Fragment>
        )
    }
}