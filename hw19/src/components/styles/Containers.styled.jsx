import styled, { css } from "styled-components";
export const Container = styled.div`
  padding: 1rem;
`;
export const BoxesContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
  justify-content: space-between;
`;
export const ExpensesContainer = styled.div`
  width: 100%;
  border: 1px solid gray;
  margin-top: 0.5rem;
  border-radius: 0.2rem;
  border-bottom: none;
`;
export const PerExpenseContainer = styled.div`
  border-bottom: 1px solid gray;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CostRemoveContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & .p {
    background-color: blue;
    color: white;
    padding: 0.2rem;
    border-radius: 2rem;
    font-size: 0.8rem;
  }
`;
export const AddExpenseContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
export const LabelInpContainer = styled.div`
  display: flex;
  margin-right: 1rem;
`;
export const LabelInp = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  & input {
    padding: 0.5rem;
  }
`;
export const BudgetInp = styled.input`
  width: 23rem;
  height: 5rem;
  border-radius: 0.25rem;
  padding: 1rem;
`;
