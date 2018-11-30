import React, { Component } from 'react'

class Todo extends Component {
  
  handleDelete = (e) =>{
    console.log('poop')
  }

  render() {
    return (
      <li>
        {this.props.task}
        <button onClick={this.handleDelete}>X</button>
      </li>
    )
  }
}

export default Todo