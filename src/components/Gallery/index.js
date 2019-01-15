import React from "react";
import {Grid,Row,Col} from "react-bootstrap";
import {GalleryTitle,ImageCard,GalleryBlock} from "./styled"
import {Carousel} from "react-bootstrap";
import Asset from "../../utils/AssetService";

const Gallery = () => {
    return(
        <React.Fragment>
             <GalleryBlock>
            <GalleryTitle >
                <h2> Our Gallery</h2>
            </GalleryTitle>
            {/* <Grid>
                <Row>
                    <Col>
                    <img src={Asset("assets/logos/gallery_img1.jpg")} width="350px" height="400px"/>
                    <img src={Asset("assets/logos/gallery_img2.jpg")} width="350px" height="400px"/>
                    <img src={Asset("assets/logos/gallery_img3.jpg")} width="350px" height="400px"/>
                    </Col>
                </Row>
            </Grid> */}
           
            <Carousel bsClass="newCarousel">
            
            <Carousel.Item>
                <ImageCard>
                <img width="700" height="500" alt="900x500" src={Asset("assets/logos/gallery_img1.jpg")} />
                </ImageCard>
            </Carousel.Item>
            <Carousel.Item>
            <ImageCard>
                <img width="700" height="500" alt="900x500" src={Asset("assets/logos/gallery_img2.jpg")} />
                </ImageCard>
            </Carousel.Item>
            <Carousel.Item>
            <ImageCard>
                <img width="700" height="500" alt="900x500" src={Asset("assets/logos/gallery_img3.jpg")} />
                </ImageCard>
            </Carousel.Item>
            
            </Carousel>
            </GalleryBlock>
           
        </React.Fragment>
    )
}

export default Gallery;