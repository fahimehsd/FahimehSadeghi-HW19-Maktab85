import React, { useContext } from "react";
import Budget from "./components/budget/budget";
import Remaining from "./components/remaining/Remaining";
import SpentSoFar from "./components/spentSoFar/SpentSoFar";
import Expenses from "./components/expenses/Expenses";
import AddExpense from "./components/addExpense/AddExpense";
import {
  BoxesContainer,
  Container
} from "./components/styles/Containers.styled";
import { AppProvider } from "./Store";
function App() {
  return (
    <AppProvider>
      <Container>
        <h1>My Budget Planner</h1>
        <BoxesContainer>
          <Budget />
          <Remaining />
          <SpentSoFar />
        </BoxesContainer>
        <Expenses />
        <AddExpense />
      </Container>
    </AppProvider>
  );
}

export default App;
