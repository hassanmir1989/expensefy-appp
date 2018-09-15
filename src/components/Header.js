import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect } from 'react-redux'
import {Button,ButtonGroup} from 'reactstrap'


function totalExpenses(expenses){
    let finalExpense = 0
    expenses.map((expense) => {
        finalExpense += expense.amount
    })
    return finalExpense
}

const Header = (props) => (
    <header>
        <h1>Expensify App</h1>


        <h2>Total Expenses : {totalExpenses(props.expenses)}</h2>
        <ButtonGroup className="clearfix">
            <NavLink to="/" activeClassName="is-active"  exact={true}><Button>Homepage</Button></NavLink>
            <NavLink to="/create" activeClassName="is-active"><Button>create</Button></NavLink>
            <NavLink to="/help" activeClassName="is-active"><Button>help</Button></NavLink>
        </ButtonGroup>

    </header>
)

const mapStateToProps = (state) => ({
    expenses:state.expenses
})


export default connect(mapStateToProps)(Header)