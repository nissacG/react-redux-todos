import React, { Component } from 'react'

class Todo extends Component {
  
  render() {
    return (
      <li className='card card-body text-center d-flex flex-row justify-content-around align-items-center mb-2' style={{ padding: '0.7rem' }}>
        <span className='col-md-9'>{this.props.task}</span>
        {this.props.delete &&
          <button
            className='btn btn-outline-secondary'
            onClick={() => this.props.delete(this.props.id)}
          >
            X
          </button>
        }
      </li>
    )
  }
}

export default Todo