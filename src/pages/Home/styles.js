import styled from "styled-components";
import { COLOR_PALETTE as C } from "../../styles";

export const Home = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    135deg,
    ${C.BACKGROUND_1} 0%,
    ${C.BACKGROUND_2} 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Window = styled.div`
  background-color: ${C.WHITE};
  width: 900px;
  height: 577px;
  border-radius: 20px;
  box-shadow: 0px 5px 12px #0000001f;

  box-sizing: border-box;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  background-color: lightgray; ///tmp
  width: 800px;
  height: 49px;
  margin-bottom: 13px;
`;

export const Description = styled.div`
  background-color: lightgray; ///tmp
  height: 74px;
  margin-bottom: 35px;
`;

export const Content = styled.div`
  background-color: lightgray; ///tmp
  height: 227px;
  margin-bottom: 30px;
`;

export const Buttons = styled.div`
  background-color: lightgray; ///tmp
  height: 49px;
`;
