import filterReducer from '../../reducers/filterReducer'
import moment from 'moment'


test("should setup default values",() => {
    const state = filterReducer(undefined,{type:"@@INIT"})
    expect(state).toEqual({
        text:"",
        sortBy:"date",
        startDate:moment().startOf("month"),
        endDate:moment().endOf("month")
    })
})


test("TESTING SORT BY DATE IN FILTER REDUCER",() => {
    const currentState = {
        sortBy:"amount",
        startDate:undefined,
        endDate:undefined,
        text:""
    }
    const action = { type : "SORT_BY_DATE" , sortBy:"date"}
    const state = filterReducer(currentState,action)
    
    expect(state.sortBy).toBe("date")
})

test("SET SORT BY TO AMOUNT",()=>{
    const currentState = {
        sortBy:"date",
        startDate:undefined,
        endDate:undefined,
        text:""
    }
    const action = {type:"SORT_BY_AMOUNT",sortBy:"amount"}
    const state = filterReducer(currentState,action)
    expect(state.sortBy).toBe("amount")

})

test("TESTING SET START DATE",() => {
    const currentState = {
        sortBy:"date",
        startDate:undefined,
        endDate:undefined,
        text:""
    }
    const action = {type:"SET_START_DATE",startDate:moment()}
    const state = filterReducer(currentState,action)
    expect(state.startDate).toEqual(moment())
})