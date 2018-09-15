import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = ({amount=0,description="",note="",createdAt=0} = {}) => ({
    type:"ADD_EXPENSE",
    expense:{
      id:uuid(),
      amount,
      description,
      note,
      createdAt
    }
  })
  
  // REMOVE_EXPENSE
  
  export const removeExpense = (id) => ({
    type:"REMOVE_EXPENSE",
    id
  
  })
  
  // EDIT_EXPENSE
  
  export const editExpense = (id,updates) => ({
    type:"EDIT_EXPENSE",
      id,
      updates
  })
  

