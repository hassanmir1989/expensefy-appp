import React from 'react';
import {connect} from 'react-redux'
import ExpenseListItem from "../components/ExpenseListItem"
import filterOptions from "../selectors/expensesFilter"



const ExpenseList = (props) => (
    <div>
        <h1>expenses</h1>
        {props.expenses.map(expense => (
            <ExpenseListItem key={expense.id} {...expense}/>
        ))}
        
        
    </div>
)

const mapStateToProps = (state) => {
    return {
       expenses:filterOptions(state.expenses,state.filter)
    }


}

export default connect(mapStateToProps)(ExpenseList)