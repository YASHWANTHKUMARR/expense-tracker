import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../expense_item/ExpenseItem";
const ExpensesList = (props) => {
  const { items } = props;
  if (items.length === 0 || !items) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((each_expense) => (
        <ExpenseItem
          key={each_expense.id}
          date={each_expense.date}
          title={each_expense.title}
          amount={each_expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
