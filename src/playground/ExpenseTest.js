import {createStore,combineReducers} from 'redux'


const addExpenses = (amountToAdd=0) => ({
    type:"ADD_EXPENSES",
    amountToAdd
})


const expensesReducerDefault = []
const expensesReducer = (state=expensesReducerDefault,action) => {
    switch(action.type){
        case "ADD_EXPENSES":
            return state.concat({
                amount:action.amountToAdd
            })
        default:
        return state
    }
    
}

const filterReducerDefault = {}
const filterReducer = (state=filterReducerDefault,action) => {
    return state
}

const store = createStore(combineReducers({
    expenses:expensesReducer,
    filter:filterReducer
}))


store.dispatch(addExpenses(10))

store.dispatch(addExpenses(20))
store.dispatch(addExpenses(30))
store.dispatch(addExpenses(40))
console.log(store.getState())