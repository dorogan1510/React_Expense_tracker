import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.scss'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
    return (
        <div>
            <ExpensesFilter />

            <div className='expenses'>
                {props.item.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </div>
        </div>
    )
}

export default Expenses
