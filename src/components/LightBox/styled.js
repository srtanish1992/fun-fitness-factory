import styled from "styled-components";

const Link = styled.span``;

const Modal = styled.div`
  display: ${props => props.display};
  position: fixed;
  z-index: 15;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.85);
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CloseSpan = styled.span`
  color: #ddd;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 16;
  font-size: 35px;
  font-weight: bold;
  transition: color 200ms linear;

  &:hover {
    color: white;
    transition: color 200ms linear;
    text-decoration: none;
    cursor: pointer;
  }

  &:focus {
    color: white;
    transition: color 200ms linear;
    text-decoration: none;
    cursor: pointer;
  }
`;

const PreviousSpan = styled(Link)`
  display: inline;
  color: #ddd;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 35px;
  font-weight: bold;
  z-index: 16;
  transition: color 200ms linear;

  &:hover {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: color 200ms linear;
  }

  &:focus {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: color 200ms linear;
  }
`;

const NextSpan = styled(Link)`
  display: inline;
  color: #ddd;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 35px;
  font-weight: bold;
  z-index: 16;
  transition: color 200ms linear;

  &:hover {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: color 200ms linear;
  }

  &:focus {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: color 200ms linear;
  }
`;

const ImageSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 15;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 15;
  max-height: 75%;
`;


export {
  Modal,
  CloseSpan,
  PreviousSpan,
  NextSpan,
  ImageSpan,
  Wrapper,
  Image
};
