import React, { useContext } from "react";
import {
  ExpensesContainer,
  PerExpenseContainer,
  CostRemoveContainer
} from "../styles/Containers.styled";
import { RemoveExpenseButton } from "../styles/Buttons.styled";
import { AppContext } from "../../Store";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id
    });
  };

  return (
    <ExpensesContainer>
      <PerExpenseContainer>
        <p>{props.name}</p>
        <CostRemoveContainer>
          <p className="p">${props.cost}</p>
          <RemoveExpenseButton onClick={handleDeleteExpense}>
            X
          </RemoveExpenseButton>
        </CostRemoveContainer>
      </PerExpenseContainer>
    </ExpensesContainer>
  );
};

export default ExpenseItem;
