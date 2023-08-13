import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react";
import ExpensesList from "./ExpensesLists";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2021');
  const [filteredItems, setFilteredItems] = useState(props.items)

  const filterChangeHandler = (e) => {
    setFilterYear(e.target.value);

    const newFilteredItems = props.items.filter((expense) => {
      return e.target.value === expense.date.getFullYear().toString();
    })

    setFilteredItems(newFilteredItems)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChange={filterChangeHandler} selected={filterYear} />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
}
