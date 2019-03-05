import styled from "styled-components";

const Slider = styled.div`
width: 100%;
position: relative;
margin: auto;
  a {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    // margin-top: -65px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;

    &:hover {
      background-color: rgba(0,0,0,0.8);
    }
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .mySlides {
    display: none;
  }

  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
    opacity :1;
  }
  
  @-webkit-keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }
  
  @keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }

`;

const Dots = styled.div`
  text-align:center;
  position:relative;
  top:-200px;
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active, .dot:hover {
    background-color: #717171;
  }
  

`;

export { Slider,Dots};