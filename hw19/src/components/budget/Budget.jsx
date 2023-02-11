import React, { useContext, useState } from "react";
import { AppContext } from "../../Store";
import TotalBudget from "./TotalBudget";
import EditBudget from "./EditBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (budget) => {
    dispatch({
      type: "SET_BUDGET",
      payload: budget
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditBudget handleSaveButton={handleSaveClick} budget={budget} />
      ) : (
        <TotalBudget handleEditBudgetButton={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
