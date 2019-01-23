import React from "react";
import {Grid,Row,Col} from "react-bootstrap";
import {GalleryTitle,ImageCard,GalleryBlock,G} from "./styled"
import {Carousel} from "react-bootstrap";
import Asset from "../../utils/AssetService";

const Gallery = () => {
    return(
        <React.Fragment>
             <GalleryBlock>
            <GalleryTitle >
                <h2> Our Gallery</h2>
            </GalleryTitle>
            <G>
                <Row>
                    <Col>
                        <img src={Asset("assets/logos/gallery_img1.jpg")} width="200px" height="200px"/>
                        <img src={Asset("assets/logos/gallery_img2.jpg")} width="200px" height="200px"/>
                        <img src={Asset("assets/logos/gallery_img3.jpg")} width="200px" height="200px"/>
                        <img src={Asset("assets/logos/gallery_img4.jpg")} width="200px" height="200px"/>
                        <img src={Asset("assets/logos/gallery_img4.jpg")} width="200px" height="200px"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={Asset("assets/logos/gallery_img5.jpg")} width="200px" height="200px"/>
                        <img src={Asset("assets/logos/gallery_img6.jpg")} width="200px" height="200px"/>
                        <img src={Asset("assets/logos/gallery_img7.jpg")} width="200px" height="200px"/>
                        <img src={Asset("assets/logos/gallery_img8.jpg")} width="200px" height="200px"/>
                        <img src={Asset("assets/logos/gallery_img8.jpg")} width="200px" height="200px"/>
                    </Col>
                </Row>
            </G>
           
            
            </GalleryBlock>
           
        </React.Fragment>
    )
}

export default Gallery;