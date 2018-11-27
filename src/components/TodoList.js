import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: ['eat', 'sleep'],
      input: ''
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.input)
  }

  handlechange = (e) => {
    this.setState({
      input: e.target.value
    })
    console.log(this.state.input)
  }

  render() {
    let todolist = this.state.todos.map( (task, index) => <Todo task={task} key={index} /> )
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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