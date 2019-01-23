import styled from "styled-components";
import Asset from "../../utils/AssetService";

const TrainerTitle = styled.div`
text-align:center;
margin-bottom:50px;
margin-top:60px;
text-transform:uppercase;
`;

const TrainerCard = styled.div`
width:200px;
height:200px;
position:absolute;
left: 515px;
`;

const TrainerCard1 = styled.div`
width:200px;
height:200px;
position:absolute;
left: 815px;
`;

const Trainerinfo = styled.div`
color:white;
background-color:black;
height:50px;
width:200px;
:hover {
    background-color:#1cf1f1;
}
`;

const TrainerName = styled.div`

display:inline-block;
h4 {
    padding-left:75px;
    font-size:20px;
}

`;

const TrainerImage = styled.div`
border:solid 1px lightgrey;
`;

const TrainerSocial = styled.div`
width:50px;
height:90px;
position:absolute;
background-color: rgba(2, 2, 2, 0.65);
top:50px;
div {
    border: 0.5px solid white;
    width:30px;
    height:30px;
    text-align:center;
    vertical-align:center;
}
ul {
    margin:0;
    padding:0;
}
li {
    list-style-type:none;
    padding-top:10px;
    padding-left:5px;
}
span {
    padding-top: 3px;
    display: inline-block;
}
.facebook {
    :hover{
        background-color:#4267b2;
    }
}
.instagram {
    :hover{
        background-color:#e4405f;
    }
}

`;


export {Trainerinfo,TrainerName,TrainerCard,TrainerImage,TrainerTitle,TrainerSocial,TrainerCard1}