import styled from "styled-components";

const Title = styled.div`
font-size: 40px;
font-weight: 600;
text-align:center;
padding:50px 0;
font-family: 'Raleway',sans-serif;
color: #444;
position:relative;
z-index:-1;
&::after {
    border: 0.8px solid #333;
    bottom: 32px;
    content: "";
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    width: 6%;
}
`;

const ImageDiv = styled.div`
    
`;

const Image = styled.img`
padding-right:10px;
margin-bottom:30px;
width:360px;
height:280px;
position:relative;
    z-index:-1;
`;

export {ImageDiv,Title,Image};