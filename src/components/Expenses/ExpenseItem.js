import React, { useState } from "react"; // useState is a hook
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";
export function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); // ot returns an array - [ variable, function]
  const [newTitle, setNewTitle] = useState("hi");

  const clickHandler = () => {
    setTitle(newTitle);
  };

  const changeHandler = (event) => {
    setNewTitle(event.target.value);
  };
  return (
    <Card className="expense-item">
      <div className="expense-item_description">
        <ExpenseDate date={props.date} />
        <div className="expense-item_where">{title}</div>
      </div>
      <div className="expense-item_price">
        <div>${props.amount}</div>
      </div>
      <input type="text" value={newTitle} onChange={changeHandler} />
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
