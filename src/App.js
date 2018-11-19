import React, { Component } from 'react'
import './styles/App.css'
import TodoList from './components/TodoList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>My Todos!</h1>
        <TodoList />
      </div>
    )
  }
}

export default App
