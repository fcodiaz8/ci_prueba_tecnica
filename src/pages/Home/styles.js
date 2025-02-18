import styled from "styled-components";
import { COLOR_PALETTE as C } from "../../styles";

export const Home = styled.div`
  width: 100%;
  min-height: 100vh;
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
  display: flex;
  flex-direction: column;
  background-color: ${C.WHITE};
  width: 900px;
  height: 577px;
  border-radius: 20px;
  box-shadow: 0px 5px 12px ${C.SHADOW};
  box-sizing: border-box;
  padding: 50px;
  margin: 50px;
`;

export const Title = styled.div`
  height: 49px;
  margin-bottom: 13px;
  text-align: center;

  font-size: 40px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: 0px;
  color: ${C.BLACK};
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  height: 74px;
  margin-bottom: 35px;
  font-size: 18px;
  text-align: center;
  color: ${C.BLACK};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${C.BACKGROUND_3};
  height: 227px;
  margin-bottom: 30px;
  border: solid 1px ${C.BORDER};
  padding: 13px 11px;
  overflow-y: auto;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 49px;

  > div {
    display: flex;
    gap: 15px;
  }
`;
