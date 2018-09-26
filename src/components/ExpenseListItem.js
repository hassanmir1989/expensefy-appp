import React from 'react';
import {connect} from "react-redux"
import {NavLink} from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = (props) => (
    <div>
        <h4>Description : <NavLink to={`/edit/${props.id}`}>{props.description}</NavLink></h4>
        <h4>Amount : {props.amount}</h4>
        <h4>Note : {props.note}</h4>
        <h4>Created At : {props.createdAt}</h4>        
                      
        <h4>{moment(props.createdAt).format("Do MM YY")}</h4>
          
        <hr/>
        
    </div>
    
)



export default connect()(ExpenseListItem)