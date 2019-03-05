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
margin-bottom: -40px;
&::after {
    border: 0.8px solid #333;
    bottom: 32px;
    content: "";
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    width: 15%;
}
`;

const Image = styled.img`
position:relative;
z-index:-1;
`;

const Para = styled.div`
position:relative;
z-index:-1;
font-size:20px;
padding:10px 0;
font-family: 'Open Sans', sans-serif;
color: #444;
margin: 0 0 15px;
line-height: 25px;
text-align: justify;
`;

const Icon = styled.img`

`;

const IconDiv = styled.div`
padding-top:30px;
`;

const ContentDiv = styled.div`
    padding-top:50px;
`;

export {Title,Image,Para,ContentDiv,Icon,IconDiv};