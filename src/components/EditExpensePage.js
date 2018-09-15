import React from 'react'
import {connect} from "react-redux"
import {editExpense} from '../actions/expenses'
import ExpenseForm from './ExpenseForm'
import {removeExpense} from '../actions/expenses'



function EditExpensePage(props){
    return(
    
            <div>
            <h1>This is the edit page</h1>
            <ExpenseForm {...props.expenses}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expenses.id,expense))
                props.history.push("/")
            }
                
            }
            />
            <button onClick={() => {
                props.dispatch(removeExpense(props.expenses.id))
                props.history.push("/")
            }}>Remove</button>
            
            </div>
        )
     
    }

const mapStateToProps = (state,props) => ({
    expenses:state.expenses.find((expense) => expense.id === props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage)