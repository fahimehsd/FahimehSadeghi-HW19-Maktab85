import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../../Store";
import { SearchInp } from "../styles/Inputs.styled";
const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [filtered, setFiltered] = useState(expenses || []);

  useEffect(() => {
    setFiltered(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filtered) =>
      filtered.name.toLowerCase().includes(event.target.value)
    );
    setFiltered(searchResults);
  };

  return (
    <>
      <SearchInp
        type="text"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      <div>
        {filtered.map((item) => (
          <ExpenseItem id={item.id} name={item.name} cost={item.cost} />
        ))}
      </div>
    </>
  );
};

export default ExpenseList;
