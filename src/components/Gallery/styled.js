import styled from "styled-components";
import {Grid} from "react-bootstrap";


const GalleryBlock = styled.div`
background-color: #e9e9e9 !important;
img {
    padding-right:5px;
    padding-bottom:5px;
}
`;

const GalleryTitle = styled.div`
text-align:center;
margin-bottom:50px;
margin-top:360px;
text-transform:uppercase;
h2 {
    padding-top:60px;
}

`;

const ImageCard = styled.div`
text-align:center;
`;

const G = styled(Grid)`
    text-align:center;
    padding-bottom:35px;
`;

export {GalleryTitle,ImageCard,GalleryBlock,G}