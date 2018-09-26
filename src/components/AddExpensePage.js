import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
import {connect} from 'react-redux'
import {startAddExpense} from '../actions/expenses'

const AddExpensePage = (props) => {
    return(
    <div>
    <h1>This is the Add expense page</h1>
    <ExpenseForm 
    onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense))
        props.history.push("/")
    }}
    />
    </div>)
}

export default connect()(AddExpensePage)