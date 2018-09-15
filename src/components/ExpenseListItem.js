import React from 'react';
import {connect} from "react-redux"
import {NavLink} from 'react-router-dom'


const ExpenseListItem = (props) => (
    <div>
        <h4>Description : <NavLink to={`/edit/${props.id}`}>{props.description}</NavLink></h4>
        <h4>Amount : {props.amount}</h4>
        <h4>Note : {props.note}</h4>
        <h4>Created At : {props.createdAt.valueOf()}</h4>        
        <h4>Created At : {props.createdAt.format("Do MMM YY")}</h4>   
          
        <hr/>
        
    </div>
    
)



export default connect()(ExpenseListItem)