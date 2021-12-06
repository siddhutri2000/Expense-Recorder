import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const expenses = props.items;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log("expense.js");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        seleted={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((Expense) => (
        <ExpenseItem
          title={Expense.title}
          amount={Expense.amount}
          date={Expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
