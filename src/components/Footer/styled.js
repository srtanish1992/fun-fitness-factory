import styled from "styled-components";

const Logo = styled.img`
width:300px;
height:250px;
padding:20px 0;
`;

const FooterDiv = styled.div`
margin-top:70px;
padding:50px 0;
background: #f9f9f9;
position:relative;
// z-index:-1;
h2 {
    color: #444;
    font-size: 20px;
    letter-spacing: 2px;
    padding-bottom: 10px;
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
}


}
`;

const Contact = styled.div`
padding:10px 0;
font-size:20px;
a {
    padding-right: 20px; 
    font-size:16px;
    font-family: 'Open Sans', sans-serif;
    color: #444;
}
`;

const Social = styled.div`
padding:50px 0;
display:inline-block;
padding-right: 20px;
a {
    border: 1px solid #444;
    color: #444;
    display: block;
    font-size: 16px;
    height: 40px;
    line-height: 38px;
    margin-right: 5px;
    text-align: center;
    width: 40px;
    border-radius: 50%;
    
}

 .faFacebook {
        background-color:#3b5999;
}

.faInstagram {
    background-color:#e4405f;
}

`;

const Copy = styled.div`
    text-align:center;
    font-size:20px;
    background: #f1f1f1;
    padding: 15px 0;
`;

export {Logo,FooterDiv,Contact,Social,Copy};