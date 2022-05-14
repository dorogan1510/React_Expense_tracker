import React, { useState } from 'react'
import './Expenses.scss'
import ExpensesFilter from './ExpensesFilter'
import NoExpensesFound from './NoExpensesFound'

function Expenses(props) {
    const [isfiltered, setIsFiltered] = useState(true)

    const startFilterHandler = () => {
        setIsFiltered(false)
    }

    const cancelFilterHandler = () => {
        setIsFiltered(true)
    }

    // set current month
    const [filteredMonth, setFilteredMonth] = useState(new Date().getMonth())
    //

    const filterChangeHandler = selectedMonth => {
        setFilteredMonth(selectedMonth)
    }

    // Filter operation
    const filterExpenses = props.item.filter(expense => {
        return expense.date.getMonth().toString() === filteredMonth
    })
    //

    // No filter operation
    const noFilterExpenses = props.item.filter(expense => {
        return expense.date.getMonth().toString() | filteredMonth
    })
    //

    return (
        <div className='expenses'>
            {isfiltered && (
                <div>
                    <button
                        className='expenses__filterButton'
                        type='button'
                        onClick={startFilterHandler}
                    >
                        Filter
                    </button>
                    <NoExpensesFound item={noFilterExpenses} />
                </div>
            )}
            {!isfiltered && (
                <div>
                    <ExpensesFilter
                        selected={filteredMonth}
                        onChangeFilter={filterChangeHandler}
                        onCancelFilter={cancelFilterHandler}
                    />
                    <NoExpensesFound item={filterExpenses} />
                </div>
            )}
        </div>
    )
}

export default Expenses
