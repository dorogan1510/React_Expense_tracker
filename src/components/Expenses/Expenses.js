import React, { useState } from 'react'
import './Expenses.scss'
import ExpensesFilter from './ExpensesFilter'
import NoExpensesFound from './NoExpensesFound'

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
                <NoExpensesFound item={filterExpenses} />
            </div>
        </div>
    )
}

export default Expenses
