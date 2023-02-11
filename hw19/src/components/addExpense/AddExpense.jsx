import React, { useContext, useState } from "react";
import { AppContext } from "../../Store";
import {
  AddExpenseContainer,
  LabelInpContainer,
  LabelInp
} from "../styles/Containers.styled";
import { SaveExpenseButton } from "../styles/Buttons.styled";
const AddExpense = (props) => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const addExpense = (e) => {
    e.preventDefault();
    const expense = {
      id: Math.random(),
      name,
      cost: parseInt(cost)
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense
    });
    setName("");
    setCost("");
  };
  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>Add Expense</h2>

      <AddExpenseContainer onSubmit={addExpense}>
        <LabelInpContainer>
          <LabelInp>
            <label>Name</label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </LabelInp>
          <LabelInp>
            <label>Cost</label>
            <input
              required
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </LabelInp>
        </LabelInpContainer>

        <SaveExpenseButton type="submit">Save</SaveExpenseButton>
      </AddExpenseContainer>
    </div>
  );
};
export default AddExpense;
