import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: [],
      todo: '',
      id: 0
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    let newTodos = [...this.state.todos]
    newTodos.push(this.state.todo)
    this.setState({
      todos: newTodos
    })
    var form = document.getElementById('form')
    form.reset()
  }

  handlechange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  render() {
    let todolist = this.state.todos.map( (task, index) => <Todo task={task} key={index} /> )
    return (
      <div>
        <form id='form' onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handlechange}/>
          <button type="submit" >Submit</button>
        </form>
        <ul>
          { todolist }
        </ul>
      </div>
    )
  }
}

export default TodoList