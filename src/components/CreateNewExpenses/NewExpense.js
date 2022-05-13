import React, { useState } from 'react'
import './NewExpense.scss'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(true)

    const onSaveExpenseDataHandler = data => {
        const expenseData = {
            ...data,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData)
    }

    const createNewExpense = () => {
        setIsEditing(false)
    }

    const cancelNewExpense = () => {
        setIsEditing(true)
    }

    return (
        <div className='new-expense'>
            {isEditing && (
                <button onClick={createNewExpense}>Add new Expense</button>
            )}
            {!isEditing && (
                <ExpenseForm
                    onSaveExpenseData={onSaveExpenseDataHandler}
                    onCancel={cancelNewExpense}
                />
            )}
        </div>
    )
}

export default NewExpense
