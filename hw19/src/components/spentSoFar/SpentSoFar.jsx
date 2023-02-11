import React, { useContext } from "react";
import { AppContext } from "../../Store";
import { Box } from "../styles/Box.styled";

const SpentSoFar = () => {
  const { expenses } = useContext(AppContext);
  const total = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div>
      <Box spent>Spent So Far: ${total}</Box>
    </div>
  );
};
export default SpentSoFar;
