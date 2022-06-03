import styled from "styled-components";

export const Banner2 = styled.div`
    height: 102vh;
    width: 100%;
    z-index: -100;
    background-image: url("./static/background.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0% 0% 152% 152% / 0% 0% 20% 20%;
    margin-top: -100px;

  @media (max-width: 768px) and (orientation: portrait) {
      height: 35vh;
  }
`;

export default Banner2;
