import * as S from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const navigate = useNavigate();

  return (
    <S.Add>
      <S.Window>
        <S.Description>Add item to list</S.Description>

        <S.Content>
          <input placeholder="Type the text here..." />
        </S.Content>

        <S.Buttons>
          <div />
          <div>
            <Button
              type="primary"
              label="ADD"
              onClick={() => navigate("/add")}
            />
            <Button
              type="secondary"
              label="CANCEL"
              onClick={() => navigate("/")}
            />
          </div>
        </S.Buttons>
      </S.Window>
    </S.Add>
  );
};
