import React, { useState } from "react";
import { EditBudgetButton } from "../styles/Buttons.styled";
import { BudgetInp } from "../styles/Containers.styled";

const EditBudget = (props) => {
  const [budget, setBudget] = useState(props.budget);
  return (
    <>
      <BudgetInp
        required
        type="number"
        value={budget}
        onChange={(event) => setBudget(event.target.value)}
      />
      <EditBudgetButton
        type="button"
        onClick={() => props.handleSaveButton(budget)}
      >
        Save
      </EditBudgetButton>
    </>
  );
};

export default EditBudget;
