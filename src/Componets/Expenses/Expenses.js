import React from 'react';

import { ExpenseItem } from './ExpenseItem';
import '../UI/Card.css'
import {Card} from '../UI/Card'
import { ExpensesFilter } from './ExpensesFilter';
import './Expenses.css'
import { useState } from 'react/cjs/react.development';

export const Expenses = ({data}) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
  }; 

    const filteredExpenses = data.filter(expense =>{
      return expense.date.getFullYear().toString()===filteredYear
    })
  
  if(!data){
    return   <h1 className='data'>No Data Available</h1> 
  }

  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter selected ={filteredYear} 
      onChangeFilter ={filteredChangeHandler} />
      {filteredExpenses.length ===0 ?  
      <p>No Expenses Found.</p> : 
      filteredExpenses.map(expense  => 
       
       <ExpenseItem  
       title = {expense.title} 
       amount ={expense.amount} 
       date= {expense.date} 
       key= {expense.id}
       /> 
       )}
       
      </Card>
  </div>
  );
};
