import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// EXPENSE ACTION SENT TO STORE - **START**
const expenseMethods = {
    // ADD_EXPENSE
    addExpense: ({ description = "No Expense Entered", note = "No Note Entered for Expense", amount = 0, createdAt = 0 } = {}) => ({
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt

        }
    }),
    // REMOVE_EXPENSE FROM STORE
    removeExpense: (id = undefined) => ({
        type: "REMOVE_EXPENSE",
        id
    }),
    // EDIT EXPENSE FROM STORE
    editExpense: ({ id, amount } = {}) => ({
        type: "EDIT_EXPENSE",
        id,
        amount
    })
}
// EXPENSE ACTION SENT TO STORE - **END**

// -------------------------------------------------------

// FILTER ACTIONS SENT TO THE STORE - **START**

const sortByText = (text = undefined) => ({
    type:"TEXT_FILTER",
    text
})

const sortByAmount = () => ({
    type:"BY_AMOUNT",
    sortBy:"amount"
})

const sortByDate = () => ({
    type:"BY_DATE",
    sortBy:"date"
})

const setStartDate = (startDate) => ({
    type:"START_DATE",
    startDate
})

const setEndDate = (endDate) => ({
    type:"END_DATE",
    endDate
})



// FILTER ACTIONS SENT TO THE STORE - **END**

// -------------------------------------------------------

// ***********REDUCERS - START ******************

// EXPENSE REDUCER - **START**
const expensesReducerDefault = []
const expensesReducer = (state = expensesReducerDefault, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return state.concat(action.expense)
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        amount: action.amount
                    }
                } else {
                    return expense
                }
            })

        case "REMOVE_EXPENSE":
            return state.filter((expense) => {
                return expense.id !== action.id
            })
        default:
            return state
    }
}
// EXPENSE REDUCER - **END**

const filterReducerDefault = {text:"",sortBy:"date",startDate:undefined,endDate:undefined}
const filterReducer = (state = filterReducerDefault, action) => {
    switch(action.type){
        case "TEXT_FILTER":
        return {
            ...state,
            text:action.text
        }
        case "BY_AMOUNT":
        return {
            ...state,
            sortBy:action.sortBy
        }
        case "BY_DATE":
        return {
            ...state,
            sortBy:action.sortBy
        }
        case "START_DATE":
        return {
            ...state,
            startDate:action.startDate
        }
        case "END_DATE":
        return {
            ...state,
            endDate:action.endDate
        }
        default:
        return state
    }
}



// ***********REDUCERS - END ******************

function filterVisibleExpenses(expenses,{id,text,startDate,endDate}){
    return expenses.filter((expense) => {
        const textMatch = true
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate
        return textMatch && startDateMatch && endDateMatch
    })
}



const store = createStore(combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
}))

const expenseOne = store.dispatch(expenseMethods.addExpense({ amount: 2000 ,createdAt:10 }))
const expenseTwo = store.dispatch(expenseMethods.addExpense({ amount: 1000 ,createdAt:20}))
store.dispatch(expenseMethods.addExpense({ amount: 1212 ,createdAt:30}))
const unsubscribe = store.subscribe(() => {
    const storeState = store.getState()
    const visibleExpenses = filterVisibleExpenses(storeState.expenses,storeState.filter)
    console.log(visibleExpenses)
})



// store.dispatch(expenseMethods.addExpense({ amount: 10023210 }))
// store.dispatch(expenseMethods.addExpense({ amount: 10023210 }))
// store.dispatch(expenseMethods.removeExpense(expenseOne.expense.id))
// store.dispatch(expenseMethods.editExpense({ id: expenseTwo.expense.id, amount: 42220 }))
// store.dispatch(sortByText("blabla"))
// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())
store.dispatch(setStartDate(10))
store.dispatch(setEndDate(25))
// console.log(store.getState())

