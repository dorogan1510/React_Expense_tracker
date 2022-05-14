import React from 'react'
import './ExpenseItem.scss'

function ExpenseItem(props) {
    const year = props.date.toLocaleString('en-EN', { year: 'numeric' })
    const month = props.date.toLocaleString('en-EN', { month: 'long' })
    const day = props.date.toLocaleString('en-EN', { day: 'numeric' })

    return (
        <div className='expense-item'>
            <div className='expense-item__date'>
                <div className='expense-item__date__year'>{year}</div>
                <div className='expense-item__date__month'>{month}</div>
                <div className='expense-item__date__day'>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}$</div>
            </div>
            <button className='expense-item'>Cancel</button>
        </div>
    )
}

export default ExpenseItem
