import React from "react";
import Button from "./Button";

function List() {
  const data = ["Нутелла", "Хлеб", "Молоко", "Масло", "Сыр"];

  function handleClick(e) {
    console.log(e.currentTarget.innerText);
  }

  return (
    <>
      <ul>
        {data.map((el) => (
          <li key={el} onClick={handleClick}>
            {el}
          </li>
        ))}
      </ul>
      <Button />
    </>
  );
}
export default List;
