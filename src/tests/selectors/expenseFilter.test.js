import filterOptions from '../../selectors/expensesFilter'
import moment from 'moment'

const expenses = [
    {
        id:1,
        amount:1000,
        createdAt:moment(0),
        description:"one",
        note:""
    },
    {
        id:2,
        amount:15000,
        createdAt:moment(0).subtract(5,"days").valueOf(),
        description:"two",
        note:""
    },
    {
        id:3,
        amount:-1000,
        createdAt:moment(0).add(5,"days").valueOf(),
        description:"three",
        note:""
    }

]

test("CHECKING BY TEXT",() => {
    const filter = {
        sortBy:"date",
        text:"o",
        startDate:undefined,
        endDate:undefined
    }
    const result = filterOptions(expenses,filter)
    expect(result).toEqual([expenses[1],expenses[0]])
})

test("CHECK SORT BY AMOUNT",() => {
    const filter = {
        sortBy:"amount",
        text:"",
        startDate:undefined,
        endDate:undefined
    }
    const result = filterOptions(expenses,filter)
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])

})

test("CHECK BY START DATE",() => {
    const filter = {
        sortBy:"date",
        text:"",
        startDate:moment(0),
        endDate:undefined
    }
    const result = filterOptions(expenses,filter)
    expect(result).toEqual([expenses[0],expenses[2]])
})


test("check by end date" , () => {
    const filter = {
        sortBy:"date",
        text:"",
        startDate:undefined,
        endDate:moment(0)
    }
    const result = filterOptions(expenses,filter)
    expect(result).toEqual([expenses[1],expenses[0]])
})