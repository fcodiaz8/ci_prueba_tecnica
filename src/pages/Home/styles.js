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
  width: 800px;
  height: 49px;
  text-align: center;

  font-size: 40px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: 0px;
  color: #333333;

  margin-bottom: 13px;
`;

export const Description = styled.div`
  height: 74px;
  margin-bottom: 35px;
  font-size: 18px;
  text-align: center;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  height: 227px;
  margin-bottom: 30px;

  border: solid 1px ${C.BORDER};
`;

export const Buttons = styled.div`
  height: 49px;
`;
