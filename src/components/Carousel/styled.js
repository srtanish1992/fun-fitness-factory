import styled from "styled-components";

const Slider = styled.div`
  ${"" /* width: calc(${props => props.width * props.slideCount}px / 4); */}
  width:100%;
  ${"" /* width : ${props => props.width}px; */}
  height: ${props => props.height}px;
  ${"" /* ${props => props.height}px; */}
  overflow: hidden;
  position:relative;
  z-index:-1;
`;

const Slide = styled.div`
  ${"" /* width: ${props => props.width}px; */} width:100%;
  ${"" /* height: ${props => props.height}px; */}
  display:block;
`;

const Button = styled.button`
  float: ${props => (props.prev ? "left" : "right")};
  background-color: transparent;
  border: none;
  overflow: hidden;
  outline: none;
  position:relative;
  margin-top:-450px;
  z-index:-1;
`;

export { Slider, Slide, Button};