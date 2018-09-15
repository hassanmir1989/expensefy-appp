import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



// ADD_EXPENSE
const addExpense = ({id,amount=0,description="",note="",createdAt=0}) => ({
  type:"ADD_EXPENSE",
  expense:{
    id:uuid(),
    amount,
    description,
    note,
    createdAt
  }
})

// REMOVE_EXPENSE

const removeExpense = (id) => ({
  type:"REMOVE_EXPENSE",
  id

})

// EDIT_EXPENSE

const editExpense = (id,amount) => ({
  type:"EDIT_EXPENSE",
    id,
    amount
})


// SET_TEXT_FILTER

const textFilter =(text) => ({
  type:"TEXT_FILTER",
  text

})

// SORT_BY_DATE

const byDate = () => ({
  type:"SORT_BY_DATE",
  sortBy:"date"
})


// SORT_BY_AMOUNT

const byAmount = () => ({
  type:"SORT_BY_AMOUNT",
  sortBy:"amount"
})


// SET_START_DATE

const setStartDate = (startDate) => ({
  type:"SET_START_DATE",
  startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
  type:"SET_END_DATE",
  endDate
})


const expenseReducerDefault = []
const expensesReducer = (state=expenseReducerDefault,action) => {
  switch(action.type){
    case "ADD_EXPENSE":
    return [
      ...state,
      action.expense
    ]
    case "REMOVE_EXPENSE":
    return state.filter((expense) => {
      return expense.id !== action.id
    })
    case "EDIT_EXPENSE":
    return state.map((expense) => {
      if(expense.id === action.id){
        return {
          ...expense,
          amount:action.amount
        }
      }else{
        return expense
      } 
    })
    default:
    return state
  }
}

const filterReducerDefault = {test:"",sortBy:"date",startDate:0,endDate:0}
const filterReducer = (state=filterReducerDefault,action) => {
  switch(action.type){
    
    case "TEXT_FILTER":
    return {
      ...state,
      text:action.text
    }
    case "SORT_BY_DATE":
    return{
      ...state,
      sortBy:action.sortBy
    }
    case "SORT_BY_AMOUNT":
    return{
      ...state,
      sortBy:action.sortBy
    }
    case "SET_START_DATE":
    return {
      ...state,
      startDate:action.startDate
    }
    case "SET_END_DATE":
    return {
      ...state,
      endDate:action.endDate
    }
    default:
    return state
  }
}


function filterOptions(expenses,{text,sortBy,startDate,endDate}){
  return expenses.filter((expense) => {
    // const textMatch = true || expense.description.toLowerCase().includes(text.toLowerCase())
    const textMatch = true 
    const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate
    return textMatch && startDateMatch && endDateMatch
    

  }).sort((a,b)=>{
    if(sortBy === "date"){
      return a.createdAt < b.createdAt ? -1 :1
      }else if(sortBy === "amount"){
        return a.amount < b.amount ? -1 : 1
      }
  })
  
}


const store = createStore(combineReducers({
    expenses:expensesReducer,
    filter:filterReducer
}))





const unsubscribe = store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = filterOptions(state.expenses,state.filter)
  console.log(visibleExpenses)
})

// RENT
// store.dispatch(textFilter("rent"))

// DISPATCHIN EXPENSES TO ADD IN STATE
const expenseOne = store.dispatch(addExpense({description:"rent",createdAt:2,amount:100}))
const expenseTwo = store.dispatch(addExpense({description:"two",createdAt:21,amount:120}))
const expense3 = store.dispatch(addExpense({description:"3",createdAt:3,amount:1030}))
const expense4 = store.dispatch(addExpense({description:"4 two",createdAt:23,amount:10220}))
const expense5 = store.dispatch(addExpense({description:"5 two",createdAt:23,amount:1100}))
const expense6 = store.dispatch(addExpense({description:"6 two",createdAt:111,amount:-1000}))
const expense7 = store.dispatch(addExpense({description:"7 two",createdAt:-11,amount:20}))

// DISPATCHING REMOVE EXPENSE WITH ID OF ITEM TO REMOVE
// store.dispatch(removeExpense(expenseTwo.expense.id))


// DISPATCHIN EDIT EXPENSE USING ID TO EDIT EXPENSE
// store.dispatch(editExpense(expenseOne.expense.id,420))
// store.dispatch(editExpense(expenseTwo.expense.id,420))

// DISPATCHING FILTER OPTIONS AND REPLACING DEFAULTS



// SORT BY AMOUNT
store.dispatch(byAmount())
// SORT BY DATE
store.dispatch(byDate())
// SET START DATE
store.dispatch(setStartDate(1))
// SET END DATE
store.dispatch(setEndDate(100))

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

