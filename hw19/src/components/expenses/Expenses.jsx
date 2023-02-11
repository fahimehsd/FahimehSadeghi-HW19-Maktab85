import React, { useContext, useEffect, useState } from "react";
import ExpenseList from "./ExpenseList";

import { AppContext } from "../../Store";
const Expenses = () => {
  const { expenses } = useContext(AppContext);
  const [filtered, setFiltered] = useState(expenses || []);
  useEffect(() => {
    setFiltered(expenses);
  }, [expenses]);
  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>Expenses</h2>
      <ExpenseList />
    </div>
  );
};
export default Expenses;
