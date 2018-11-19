import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: ['eat', 'sleep']
    }
  }
  render() {
    
    return (
      <div>
        <ul>
          {
            this.state.todos.map( (task, index) => 
              <Todo task={task} key={index} />
              )
          }
        </ul>
      </div>
    )
  }
}

export default TodoList