import React from "react";
import "./Expenses.css";
import { ExpenseItem } from "./ExpenseItem";

import Card from "../UI/Card";
export function Expenses(props) {
  return (
    <Card className="expenses-box">
      <ExpenseItem
        date={props.expense[0].date}
        amount={props.expense[0].amount}
        title={props.expense[0].title}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expense[1].date}
        amount={props.expense[1].amount}
        title={props.expense[1].title}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expense[2].date}
        amount={props.expense[2].amount}
        title={props.expense[2].title}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expense[3].date}
        amount={props.expense[3].amount}
        title={props.expense[3].title}
      ></ExpenseItem>
    </Card>
  );
}
