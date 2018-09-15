import {addExpense,removeExpense,editExpense} from '../../actions/expenses'

test("should setup remove expense action object",() => {
    const action = removeExpense("1231212")
    expect(action).toEqual({ 
        type:"REMOVE_EXPENSE",
        id:"1231212"
    })
})

test("should setup an edit expense action object",() => {
    const action = editExpense("12312",{note:"new note value"})
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:"12312",
        updates:{
            note:"new note value"
        }
    })
})


test("Sould setup add expense action object",() => {
    const action = addExpense({description:"test",note:"test",amount:"test",createdAt:"test"})
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            id:expect.any(String),
            description:"test",
            amount:"test",
            note:"test",
            createdAt:"test"
        }
    })
})

test("should setup add expense action object with default values",() => {
    const action = addExpense()
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            id:expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:0
        }
    })
})