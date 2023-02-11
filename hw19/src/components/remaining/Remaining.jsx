import React, { useContext } from "react";
import { AppContext } from "../../Store";
import { Box } from "../styles/Box.styled";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div>
      <Box remaining>Remaining: ${budget - totalExpenses}</Box>
    </div>
  );
};
export default Remaining;
