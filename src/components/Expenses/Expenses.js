import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.scss'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
    const [filteredMonth, setFilteredMonth] = useState('0')
    const filterChangeHandler = selectedMonth => {
        setFilteredMonth(selectedMonth)
    }

    const filterExpenses = props.item.filter(expense => {
        return expense.date.getMonth().toString() === filteredMonth
    })

    return (
        <div>
            <ExpensesFilter
                selected={filteredMonth}
                onChangeFilter={filterChangeHandler}
            />

            <div className='expenses'>
                {filterExpenses.map(expense => (
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
