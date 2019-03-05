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
    width: 30%;
}
`;

const ParentDiv = styled.div`
    .feature {
        padding-top:40px;
    }
    @media (max-width:767px){
        .feature {
            padding-top:0px;
        }
        .f {
            margin-top:30px;
        }
    }
`;

const Feature = styled.div`
    
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 2px 16px;
    border-radius: 5px;
    height: 150px;
    
    &:hover {
        cursor:pointer;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }

    @media (max-width:767px){
        height: 180px;
    }

    h4 {
        font-family: 'Open Sans',sans-serif;
        font-size:20px;
        font-weight: 600;

    }
    div {
        font-family: 'Open Sans',sans-serif;
        font-size:16px;
        text-align: justify;
    }
`;



export {Title,Feature,ParentDiv};