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
    const indexes = selectedItems.map((e) => newItems.indexOf(e));
    newItems = newItems.filter((e) => !selectedItems.includes(e));
    setItems(newItems);
    setSelectedItems([]);
    addAction("deleteItems", selectedItems, indexes);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const deleteItem = (item) => {
    let newItems = structuredClone(items);
    const index = newItems.indexOf(item);
    newItems.splice(index, 1);
    setItems(newItems);
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((e) => e !== item)
    );
    addAction("deleteItems", [item], [index]);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const addAction = (type, items, indexes) => {
    const newActions = structuredClone(actions);
    newActions.push({ type, items, indexes });
    setActions(newActions);
    localStorage.setItem("actions", JSON.stringify(newActions));
  };

  const revertAction = () => {
    const newActions = structuredClone(actions);
    const { type, items: actionItems, indexes } = newActions.pop();
    let newItems = structuredClone(items);

    switch (type) {
      case "add":
        newItems = newItems.filter((e) => e !== actionItems[0]);
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter((e) => e !== actionItems[0])
        );
        break;

      case "deleteItems":
        const orderedIndexes = structuredClone(indexes).sort();
        orderedIndexes.forEach((index) => {
          newItems.splice(index, 0, actionItems[indexes.indexOf(index)]);
        });
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
