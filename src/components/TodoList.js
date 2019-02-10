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
    if (!this.state.todo) {
      alert('You must enter a some text first!')
    } else {
      let newTodos = [...this.state.todos]
      let newTodo = {content: this.state.todo, id: this.state.id}
      let newId = this.state.id
      newId++
      newTodos.push(newTodo)
      this.setState({
        todos: newTodos,
        id: newId,
        todo: ''
      })
      var form = document.getElementById('form')
      form.reset()
    }
  }

  handlechange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  handleDelete = (id) =>{
    let newTodos = this.state.todos.filter(item => item.id !== id)
    this.setState({
      todos: newTodos
    })
  }

  render() {
    let todolist = this.state.todos[0]
    ? this.state.todos.map( task => <Todo task={task.content} key={task.id} id={task.id} delete={this.handleDelete}/> )
    : <Todo task={`No current todo's!`} />
    return (
      <div>
        <form id='form' className='text-center mx-auto col-md-6 p-0' onSubmit={this.handleSubmit}>
          <input type='text' className='form-control' onChange={this.handlechange} placeholder='Add Todo'/>
        </form>
        <ul className='col-md-6 mt-3 mx-auto text-secondary p-0'>
          { todolist }
        </ul>
      </div>
    )
  }
}

export default TodoList