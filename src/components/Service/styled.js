import styled from "styled-components";
import Asset from "../../utils/AssetService";

const Container = styled.div`
position: relative;
  margin: 0 auto;
`;

const Text = styled.div`
position: relative;
  bottom: 0;
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1;
  width: 100%;
  text-align:center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
padding:20px;
margin-top:-55px;
@media (max-width:767px){
    margin-top:-74px;
}
h1 {
    font-family: 'Raleway',sans-serif;
    font-weight:600;
}
`;

const Image = styled.img`
vertical-align: middle;
width:100%;
height:500px;
`;

const Para = styled.div`
font-size:20px;
padding:10px 0;
font-family: 'Open Sans', sans-serif;
color: #444;
margin: 0 0 15px;
line-height: 25px;
text-align: justify;
`;

const ServiceImg = styled.img`
  width:500px;
  height:500px;
  margin-top:50px;
`;

export {Container,Text,Image,Para,ServiceImg};