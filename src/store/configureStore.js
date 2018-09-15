import { createStore, combineReducers } from 'redux';
import expensesReducer from "../reducers/expensesReducer"
import filterReducer from "../reducers/filterReducer"


export default () => {
    const store = createStore(combineReducers({
        expenses:expensesReducer,
        filter:filterReducer
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return store
}

