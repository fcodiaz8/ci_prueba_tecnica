import { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export const Add = () => {
  const [newItem, setNewItem] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNewItem(newValue);
  };

  const addItem = () => {
    const currentItems = JSON.parse(localStorage.getItem("items")) || [];
    if (currentItems.includes(newItem)) {
      alert("Ya existe un elemento con el mismo texto");
    } else {
      currentItems.push(newItem);
      addAction("add", [newItem]);
      localStorage.setItem("items", JSON.stringify(currentItems));
      navigate("/");
    }
  };

  const addAction = (type, items) => {
    const newActions = JSON.parse(localStorage.getItem("actions")) || [];
    newActions.push({ type, items });
    localStorage.setItem("actions", JSON.stringify(newActions));
  };

  return (
    <S.Add>
      <S.Window>
        <S.Description>Add item to list</S.Description>

        <S.Content>
          <input
            value={newItem}
            onChange={handleChange}
            placeholder="Type the text here..."
            autoFocus
            onKeyDown={(e) => (e.key === "Enter" ? addItem() : {})}
          />
        </S.Content>

        <S.Buttons>
          <div />

          <div>
            <Button
              type="primary"
              label="ADD"
              onClick={addItem}
              disabled={newItem === ""}
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
