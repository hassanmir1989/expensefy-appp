import React from 'react'
import {addExpense} from "../actions/expenses"
import {connect} from 'react-redux'
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import {removeExpense} from '../actions/expenses'


class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        this.onDescriptionChange =this.onDescriptionChange.bind(this)
        this.onTextAreaChange = this.onTextAreaChange.bind(this)
        this.onSubmitForm = this.onSubmitForm.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
        this.onChangeAmount = this.onChangeAmount.bind(this)
        this.state ={
            description:props.description ? props.description : "",
            note:props.note ? props.note : "",
            amount:props.amount ? props.amount : "",
            createdAt:props.createdAt ? props.createdAt : moment(),
            // createdAt:props.createdAt ? props.createdAt : 0,
            focusedCalender:false,
            error:""
        }
    }

    onDescriptionChange(e){
        const description = e.target.value
        this.setState(() => ({
            description
        }))
        
    }

    onTextAreaChange(e){
        const note = e.target.value
        this.setState(() => ({
            note
        }))
    }

    onSubmitForm(e){
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({
                error:"Please Enter a valid amount and description"
            }))
        }else{
            this.setState(() => ({error:""}))
            
            this.props.onSubmit({
                description:this.state.description,
                amount:parseInt(this.state.amount),
                note:this.state.note,
                createdAt:this.state.createdAt
                
            })
        }
    }
    onDateChange(createdAt){
        if(createdAt){
            this.setState(() => ({
            createdAt
        }))
        }
        
    }

    onFocusChange({focused}){
        this.setState(() => ({
            focusedCalender:focused
        }))
        
    }
    onChangeAmount(e){
        const newAmount = e.target.value
        this.setState(() => ({
            amount:newAmount
        }))
    }
    
    
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                Expense Form
                <form onSubmit={this.onSubmitForm}>
                    <input type="number" name="amount" autoFocus value={this.state.amount} placeholder="Enter amount" onChange={this.onChangeAmount}/>
                    <input type="text" name="description" placeholder="Enter description" value={this.state.description} onChange={this.onDescriptionChange}/>
                    <textarea type="text" onChange={this.onTextAreaChange} value={this.state.note} placeholder="Enter Note for the expense (Optional)"/>
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.focusedCalender}
                    onFocusChange={this.onFocusChange} 
                    numberOfMonths={1}
                    />
                    <button>Add Expense</button>
                    

                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expenses:state.expenses
})

export default connect(mapStateToProps)(ExpenseForm)