import { useEffect, useState } from "react";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { Item } from "../../components/Item";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [actions, setActions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")) || []);
    setActions(JSON.parse(localStorage.getItem("actions")) || []);
  }, []);

  const toggleSelectItem = (e) => {
    let newSelectItems = structuredClone(selectedItems);
    if (newSelectItems.includes(e)) {
      newSelectItems = newSelectItems.filter((item) => item !== e);
    } else {
      newSelectItems.push(e);
    }
    setSelectedItems(newSelectItems);
  };

  const deleteSelectedItems = () => {
    let newItems = structuredClone(items);
    newItems = newItems.filter((e) => !selectedItems.includes(e));
    setItems(newItems);
    setSelectedItems([]);
    addAction("deleteItems", selectedItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const deleteItem = (item) => {
    let newItems = structuredClone(items);
    newItems = newItems.filter((e) => e !== item);
    setItems(newItems);
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((e) => e !== item)
    );
    addAction("deleteItems", [item]);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const addAction = (type, items) => {
    const newActions = structuredClone(actions);
    newActions.push({ type, items });
    setActions(newActions);
    localStorage.setItem("actions", JSON.stringify(newActions));
  };

  const revertAction = () => {
    const newActions = structuredClone(actions);
    const { type, items: actionItems } = newActions.pop();
    let newItems = structuredClone(items);

    switch (type) {
      case "add":
        newItems = newItems.filter((e) => e !== actionItems[0]);
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter((e) => e !== actionItems[0])
        );
        break;

      case "deleteItems":
        newItems.push(...actionItems);
        break;

      default:
        break;
    }

    setItems(newItems);
    setActions(newActions);
    localStorage.setItem("items", JSON.stringify(newItems));
    localStorage.setItem("actions", JSON.stringify(newActions));
  };

  return (
    <S.Home>
      <S.Window>
        <S.Title>This is a technical proof</S.Title>

        <S.Description>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec
          inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc,
          hendrerit posuere augue fames dictumst placerat porttitor, dis mi
          pharetra vestibulum venenatis phasellus.
        </S.Description>

        <S.Content>
          {items.map((e) => (
            <Item
              key={e}
              label={e}
              selected={selectedItems.includes(e)}
              toggleSelectItem={toggleSelectItem}
              handleDoubleClick={deleteItem}
            />
          ))}
        </S.Content>

        <S.Buttons>
          <div>
            <Button
              type="secondary"
              icon="revert"
              onClick={revertAction}
              disabled={actions.length === 0}
            />

            <Button
              type="secondary"
              label="DELETE"
              onClick={deleteSelectedItems}
              disabled={selectedItems.length === 0}
            />
          </div>

          <div>
            <Button
              type="primary"
              label="ADD"
              onClick={() => navigate("/add")}
            />
          </div>
        </S.Buttons>
      </S.Window>
    </S.Home>
  );
};
