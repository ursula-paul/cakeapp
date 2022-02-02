import React from 'react';
import   {ExpenseDate} from './ExpenseDate';
import { Card } from '../UI/Card';
import './ExpenseItem.css';
import '../UI/Card.css'

export const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
            <ExpenseDate  date={props.date }/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </Card>
  );
};
/// this is a stateless Componet or dumb Componet because it's just there to output data