import styled from "styled-components";
import Asset from "../../utils/AssetService";

const ServicesTitle = styled.div`
text-align:center;
margin-bottom:30px;
margin-top:60px;
text-transform:uppercase;
padding-top:40px;
`;

const IconCard = styled.div`
width:150px;
height:180px;
display:inline-block;
text-align:center;
margin-left:25px;
margin-top:25px;
padding-top:60px;
background-color:#FFFFFF;
box-shadow: 0 0px 1px rgb(107, 107, 107), 0 1px 2px rgba(0,0,0,.24);
`;

const Cards = styled.div`
text-align:center;
padding-bottom:35px;
padding-left:150px;
`;

const ServicesBlock = styled.div`
background-color: #e9e9e9;
`;

const Info = styled.div`
text-align:left;
padding-top: 25px;
p {
    line-height: 1.6;
    font-weight: 600;
    color: #212121;
    font-size: 19px;
}
`;

export {ServicesTitle,IconCard,Cards,ServicesBlock,Info};