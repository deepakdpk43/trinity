import "./ExpenseItem.css";

export function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item_description">
        <div>{props.date}</div>
        <div className="expense-item_where">{props.title}</div>
      </div>
      <div className="expense-item_price">
        <div>${props.amount}</div>
      </div>
    </div>
  );
}
