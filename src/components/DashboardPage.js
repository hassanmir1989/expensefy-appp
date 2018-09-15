import React from 'react'
import ExpenseList from "../components/ExpenseList"
import ExpenseListFilter from "../components/ExpenseListFilter"
import {connect} from 'react-redux'

const DashBoard = (props) => (
    <div>
    
    <ExpenseListFilter/>
          
    <h1>This is the dashboard page</h1>
    <ExpenseList/>
        
    </div>
)


const mapStateToProps = (state) => (
    {
        filter:state.filter
    }
)


export default connect(mapStateToProps)(DashBoard)