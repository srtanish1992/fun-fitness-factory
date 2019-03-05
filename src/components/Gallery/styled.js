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
// padding-right:10px;
width:360px;
height:280px;
position:relative;
z-index:-1;
border-radius: 5px 5px 5px 5px;
`;

const Picdiv = styled.div`
box-shadow: -5px 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border-radius: 5px;
margin-bottom:30px;
&:hover {
    box-shadow: -5px 8px 16px 0 rgba(0,0,0,0.2);
    cursor:pointer;
  }
`;

export {ImageDiv,Title,Image,Picdiv};