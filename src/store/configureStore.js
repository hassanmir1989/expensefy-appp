import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import expensesReducer from "../reducers/expensesReducer"
import filterReducer from "../reducers/filterReducer"


export default () => {
    const store = createStore(
        combineReducers({
        expenses:expensesReducer,
        filter:filterReducer
    }),
    applyMiddleware(thunk))
    // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return store
}

