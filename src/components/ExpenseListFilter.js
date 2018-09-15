import React from 'react'
import {connect} from 'react-redux'
import {byDate,byAmount,textFilter} from '../actions/filters'
import {DateRangePicker} from 'react-dates'
import {setStartDate,setEndDate} from '../actions/filters'

class ExpenseListFilter extends React.Component{
    constructor(props){
        super(props)
        this.onChangeDate = this.onChangeDate.bind(this)
        
        this.state ={
            startDate:props.filter.startDate,
            endDate:props.filter.endDate,
            focusedInput:null
        }
    }

    onChangeDate({ startDate, endDate }){
        this.setState(() => ({startDate, endDate }))
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    render(){
        return(
            <div>
        <div>
        <input type="text" value={this.props.filter.text} onChange={(e) => {
            this.props.dispatch(textFilter(e.target.value))
        }}/>       
        </div>

       <select onChange={(e) => {
           if(e.target.value !== "date"){
            this.props.dispatch(byAmount())
           }else{
            this.props.dispatch(byDate())
           }
           
       }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
       </select>
       <DateRangePicker
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={this.onChangeDate} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        showClearDates={true}
        />
    </div>

        )
    }
}


const mapStateToProps = (state) => ({
    filter:state.filter
}) 
export default connect(mapStateToProps)(ExpenseListFilter)