import styled from "styled-components";
import Asset from "../../utils/AssetService";

const HomePageImage = styled.div`
  width: 100%;
  height: 400px;
`;

const Image = styled.div`
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${`url(${Asset("assets/logos/homepage.jpeg")})`};

  background-size: cover;
`;

const DivBlock = styled.div`
  width: 100%;
  h3 {
    text-align: center;
    font-size: 24px;
    font-family: "sans-serif";
    font-weight: 600;
  }
  div {
    font-size: 18px;
    font-family: "sans-serif";
    padding: 10px 20px 0 20px;
  }
`;

export { HomePageImage, Image, DivBlock };
