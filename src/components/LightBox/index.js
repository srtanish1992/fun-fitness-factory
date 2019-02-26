import React from "react";
import {
  Modal,
  Wrapper,
  CloseSpan,
  NextSpan,
  PreviousSpan,
  Image
} from "./styled";

import Asset from "../../utils/AssetService";

class LightBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block",
      index: props.activeIndex
    };
  }

  keypress = event => {
    switch (event.keyCode) {
      case 27:
        this.handleClose();
        break;
      case 37:
        this.prev();
        break;
      case 39:
        this.next();
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keypress, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keypress, false);
  }
  handleClose = () => {
    this.setState({ display: "None" });
    this.props.onClose(false, window.location);
  };

  next = () => {
    this.setState(
      {
        index: (this.state.index + 1) % this.props.content.length
      }
    );
  };
  
  prev = () => {
    this.setState(
      {
        index:
          (this.state.index + this.props.content.length - 1) % this.props.content.length
      }
    );
  };

  renderArtifact = artifact => {
        return <Image src={Asset(artifact.url)} id={this.state.index} />
    
  };

  render() {
    return (
      <Modal display={this.state.display}>
        <Wrapper>
          <CloseSpan onClick={this.handleClose}>&times;</CloseSpan>
          <PreviousSpan onClick={() => this.prev()}>&lt;</PreviousSpan>

          {this.renderArtifact(this.props.content[this.state.index])}

          <NextSpan onClick={() => this.next()}>&gt;</NextSpan>
        </Wrapper>
      </Modal>
    );
  }
}


export default LightBox;
