import React, { useState } from 'react'
import './ExpenseForm.scss'

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = event => setEnteredTitle(event.target.value)
    const amountChangeHandler = event => setEnteredAmount(event.target.value)
    const dateChangeHandler = event => setEnteredDate(event.target.value)

    const submitHandler = event => {
        event.preventDefault()

        const expenseData = {
            id: Math.random().toString(),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        console.log(expenseData)

        props.onSaveExpenseData(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        value={enteredTitle}
                        type='text'
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        value={enteredAmount}
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        value={enteredDate}
                        type='date'
                        min='2022-04-18'
                        max='2024-04-18'
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default ExpenseForm
