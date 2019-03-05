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
    width: 10%;
}

`;

const TeamDiv = styled.div`
width:280px;
position:relative;
z-index:-1;
`;

const AboutDiv = styled.div`
position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 280px;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(0, 0, 0, 0.70);
  border-radius: 5px 5px 0 0;
`;

const Image = styled.img`
opacity: 1;
  display: block;
  transition: .5s ease;
  backface-visibility: hidden;
  border-radius: 5px 5px 0 0;
`;

const Card = styled.div`
position:relative;
padding:0;
width: 280px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border-radius: 5px;
&:hover {
    cursor:pointer;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
&:hover {
    ${AboutDiv} {
        opacity: 1;
    }
    ${Image} {
        opacity: 0.3;
    }
}
`;

const Description = styled.div`
position:relative;
z-index:-1;
width:280px;
font-size:20px;
border: 1px solid #ddd;
padding: 10px 0px;
`;

const Name = styled.div`
text-align:center;
font-size: 24px;
line-height: 26px;
color: #444;
margin-bottom: 5px;
font-family: 'Raleway', sans-serif;
margin: 0 0 15px;
font-weight: 500;
`;

const Position = styled.div`
text-align:center;
color: #444;
margin-bottom: 5px;
margin: 0 0 15px;
font-family: 'Open Sans', sans-serif;
font-size: 16px;
line-height: 22px;
font-weight: 200;
`;

const About = styled.div`
text-align:justify;
color: white;
font-size: 16px;
padding: 16px 10px;
font-family: 'Open Sans', sans-serif;
line-height: 22px;
font-weight: 200;
`;

const ParentDiv = styled.div`
padding-left:200px;
.swati {
    margin-left:100px !important;
    @media (max-width: 767px) {
        margin-left:0px !important;
        margin-top:50px;
      }
} 
@media (max-width: 767px) {
    padding-left:0px;
  }
`;


export {Title,Image,Name,Position,About,Description,AboutDiv,TeamDiv,ParentDiv,Card};