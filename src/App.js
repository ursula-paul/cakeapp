import React ,{useState} from 'react';
// import { ExpensesFilter } from './Componets/Expenses/ExpensesFilter';
import { NewExpense  } from './Componets/NewExpense/NewExpense'; 
import { Expenses } from './Componets/Expenses/Expenses';

const Dummy_Expenses = [
      {
        id:'e1',
        title:"Toilet Papper",
        amount:94.12,
        date: new Date(2020, 7, 14),


      },
      {
        id:'e2',
        title:"New Tv",
        amount:799.49,
        date: new Date(2021, 2, 12),


      },

      {
        id:'e3',
        title:"Car Insurance",
        amount:294.67,
        date: new Date(2021, 2, 28),


      },

      {
        id:'e4',
        title:"New Desk (Wooden)",
        amount:450,
        date: new Date(2021, 5, 12 ),


      },

      


    ]



export const App = () => {
    const [expenses, setExpenses] = useState(Dummy_Expenses)
  
    const addExpenseHandler = expense => {

        setExpenses(prevExpenses =>{
          return [expense, ...prevExpenses]
        });
      console.log('In App.js')
      console.log( expenses )
    }
  return (<div >
    <div className='App'>

         
          <NewExpense onAddExpense = {addExpenseHandler }/>
          <Expenses data={expenses}/>
         
          
    </div>
  </div>);
};


export  default App

