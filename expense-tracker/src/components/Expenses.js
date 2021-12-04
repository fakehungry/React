import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2019");
  const selectYearFilter = (selectedYear) => {
    setYear(selectedYear);
  };

  const filterExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onSelectFilter={selectYearFilter} />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
}

export default Expenses;
