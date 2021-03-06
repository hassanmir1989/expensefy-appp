import uuid from 'uuid';
import database from '../firebase/firebase';
import moment from 'moment'
// ADD_EXPENSE
export const addExpense = (expense) => ({
    type:"ADD_EXPENSE",
    expense
  })

  export const startAddExpense = (expenseData = {}) => {
    return (dispatch,getState) => {
      const {
        description="",
        amount=0,
        note ="",
        createdAt = 0
      } = expenseData

      const expense = {description,amount,note,createdAt:createdAt.valueOf()}
      
      database.ref("expenses").push(expense).then((ref) => {
        dispatch(addExpense({
          id:ref.key,
          ...expense
        }))
      })

    }
  }
  
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
  

