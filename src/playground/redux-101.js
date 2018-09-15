import {createStore} from 'redux'
import { Subscriber } from '../../node_modules/rxjs';


const incrementBy = ({incrementBy} = {}) => ({
    type:"INCREMENT",
    incrementBy:incrementBy
})

const countReducer = () => (state = {count:0},action) => {
    switch(action.type){
        case "INCREMENT":
        return{
            count:state.count > 0 ? action.incrementBy + state.count : action.incrementBy
        }
    }

}


const store = createStore(countReducer())


const unSubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementBy({incrementBy:20}))
store.dispatch(incrementBy({incrementBy:10}))


store.dispatch(incrementBy({incrementBy:10}))





unSubscribe()