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

  const addItem = (e) => {
    let currentItems = localStorage.getItem("items");
    currentItems = currentItems ? currentItems.split(",") : [];
    if (currentItems.includes(newItem)) {
      alert("Ya existe un elemento con el mismo texto");
    } else {
      currentItems.push(newItem);
      localStorage.setItem("items", currentItems);
      navigate("/");
    }
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
