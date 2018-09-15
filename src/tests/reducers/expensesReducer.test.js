import expensesReducer from '../../reducers/expensesReducer'


test("TESTING ADD EXPENSE REDUCER",() => {
    const state = expensesReducer(undefined,{type:"@@Init"})
    expect(state).toEqual([])
})

const expense = {
    id:123,
    amount:0,
    description:"",
    note:"",
    createdAt:0
}

const expenseUpdate = {
    id:321,
    amount:120,
    description:"",
    note:"",
    createdAt:1230
}

const removeExpense = [
    {
        id:321,
        amount:120,
        description:"",
        note:"",
        createdAt:0},
        {
            id:123,
            amount:0,
            description:"",
            note:"",
            createdAt:0
        }
]

test("TESTING ADD EXPENSE",() => {
    const action = {type:"ADD_EXPENSE",expense}
    const state = expensesReducer([],action)
    expect(state).toEqual([{
        id:123,
        amount:0,
        description:"",
        note:"",
        createdAt:0
    }])
})

test("EDIT EXPENSE",() => {
    const action = {type:"EDIT_EXPENSE",id:123,updates:expenseUpdate}

    const state = expensesReducer([expense],action)
    expect(state).toEqual([{
        id:321,
        amount:120,
        description:"",
        note:"",
        createdAt:1230
    }])
})

test("REMOVE EXPENSE",() => {
    const action = {type:"REMOVE_EXPENSE",id:123}
    const state = expensesReducer(removeExpense,action)
    expect(state).toEqual([{
        
            id:321,
            amount:120,
            description:"",
            note:"",
            createdAt:0
    }])
})