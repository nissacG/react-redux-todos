import { ADD_TODO, REMOVE_TODO } from '../actions/todos'

const initialState = {
  todos: [], 
  id: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newState = {...state}
      newState.id++
      return {
        ...newState, 
        todos: [...newState.todos, {task: action.tast, is: newState.id}]
      }
    case REMOVE_TODO:
      let todos = state.todos.filter(val => val.id !== action.id)
      return {...state, todos}
    default:
      return state
  }
}