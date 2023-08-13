import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: 0,
        date: '2023-07-29'
    })

    const addNewExpenseClickHandler = () => {
        setShowExpenseForm(true);
    }

    const cancelClickHandler = () => {
        setShowExpenseForm(false);
    }

    const titleChangeHandler = (e) => {
        setUserInput((prevState) => {
            return { ...prevState, title: e.target.value }
        })
    }

    const amountChangeHandler = (e) => {
        setUserInput((prevState) => {
            return { ...prevState, amount: e.target.value }
        })
    }

    const dateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return { ...prevState, date: e.target.value }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title: userInput.title,
            amount: +userInput.amount,
            date: new Date(userInput.date),
        }

        setUserInput(() => {
            return {
                title: '',
                amount: 0,
                date: '2023-07-29',
            }
        })

        props.onSaveExpenseData(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={userInput.title} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={userInput.amount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2025-12-31" onChange={dateChangeHandler} value={userInput.date} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}