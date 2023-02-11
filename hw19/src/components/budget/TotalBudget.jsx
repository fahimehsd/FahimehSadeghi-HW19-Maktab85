import React from "react";
import { Box } from "../styles/Box.styled";
import { EditBudgetButton } from "../styles/Buttons.styled";
const TotalBudget = (props) => {
  return (
    <>
      <Box budget>
        Budget: ${props.budget}
        <EditBudgetButton type="button" onClick={props.handleEditBudgetButton}>
          Edit
        </EditBudgetButton>{" "}
      </Box>
    </>
  );
};

export default TotalBudget;
