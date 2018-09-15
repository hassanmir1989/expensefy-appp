import {textFilter,byDate,byAmount,setStartDate,setEndDate} from '../../actions/filters'
import moment from 'moment'

test("test filter text",() => {
    const action = textFilter("works")
    expect(action).toEqual({
        type:"TEXT_FILTER",
        text:"works"
    })

})

test("test filter setup filter object with default values",() => {
    const action = textFilter()
    expect(action).toEqual({
        type:"TEXT_FILTER",
        text:""
    })
})


test("SORT BY DATE SETUP ACTION OBJECT",() => {
    const action = byDate()
    expect(action).toEqual({
        type:"SORT_BY_DATE",
        sortBy:"date"
    })
})

test("SORT BY AMOUNT SETUP ACTION OBJECT", () => {
    const action = byAmount()
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT",
        sortBy:"amount"
    })
})

test("SET START DATE",() => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate:moment(0)
    })
})

test("SHOUDL GENERATE END DATE",() => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate:moment(0)
    })
})