import React from 'react';

import { ExpenseForm } from './ExpenseForm';

import './NewExpense.css'

// lifting a state componet up is passing data from some child componet to from parentcomponet to either use there or pass it to some other child componet 
export const NewExpense = (props ) => {

    const saveExpenseDataHandler = (enteredExpenseData ) =>{
        const expenseData = { 
            ...enteredExpenseData,
            id:Math.random().toString()
        };
       props.onAddExpense(expenseData)
    };
  return (<div className='new-expense'>

      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
       
  </div>);
};
 