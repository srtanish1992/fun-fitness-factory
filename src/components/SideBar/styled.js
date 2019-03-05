import styled from "styled-components";

const Slider = styled.div`
    // height: 100%;
    width: ${props=> props.sideBar ? "250px": "0px"};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;

    .closeBtn {
        position: absolute;
        top: 0;
        right: 5px;
        font-size: 36px;
        margin-left: 50px;
    }

    .dropdown-container1 {
        // display: ${props=>props.dd1 ? "block": "none"};
        background-color: #262626;
        padding-left: 8px;
    }

    .dropdown-container2 {
        // display: ${props=>props.dd2 ? "block": "none"};
        background-color: #262626;
        padding-left: 8px;
    }

    a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 20px;
        color: #818181;
        display: block;
        transition: 0.3s;
        font-family: 'Raleway',sans-serif;
        &:hover {
            color: #f1f1f1;
        }
      }

      span {
        float: right;
        padding-right: 8px;
      }

      .services {
          font-size:14px;
          font-family: 'Raleway',sans-serif;
      }

      .link {
          padding:0px;
      }

`;

export {Slider};