
// SET_TEXT_FILTER

export const textFilter = (text="") => ({
    type:"TEXT_FILTER",
    text
  
  })
  
  // SORT_BY_DATE
  
  export const byDate = () => ({
    type:"SORT_BY_DATE",
    sortBy:"date"
  })
  
  
  // SORT_BY_AMOUNT
  
  export const byAmount = () => ({
    type:"SORT_BY_AMOUNT",
    sortBy:"amount"
  })
  
  
  // SET_START_DATE
  
  export const setStartDate = (startDate=0) => ({
    type:"SET_START_DATE",
    startDate
  })
  
  // SET_END_DATE
  export const setEndDate = (endDate=0) => ({
    type:"SET_END_DATE",
    endDate
  })