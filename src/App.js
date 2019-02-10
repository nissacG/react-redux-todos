import React, { Component } from 'react'
import './styles/App.css'
import TodoList from './components/TodoList'

class App extends Component {
  render () {
    return (
      <div className='App container'>
        <h2 className='text-center text-dark my-5'>My React Redux Todos!</h2>
        <TodoList />
      </div>
    )
  }
}

export default App
