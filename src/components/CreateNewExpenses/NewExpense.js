import React from 'react'
import './NewExpense.scss'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
    const onSaveExpenseDataHandler = data => {
        const expenseData = {
            ...data,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense
