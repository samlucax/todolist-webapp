import React, { Component } from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delayShowingNewTodo: parseInt(new URL(window.location.href).searchParams.get('delay-new-todo'), 10) || 0
    }

    if (this.state.delayShowingNewTodo > 0) {
      setTimeout(this.handleEndOfDelayShowingNewTodo.bind(this), this.state.delayShowingNewTodo)
    }
  }

  handleEndOfDelayShowingNewTodo() {
    this.setState({delayShowingNewTodo: 0})
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {

    return (
      <header className="header">
          <h1>todos</h1>
          {/* <h1 style={{color:'green'}}>todos</h1> */}
          {
            this.state.delayShowingNewTodo === 0
              ? <TodoTextInput newTodo
                               onSave={this.handleSave.bind(this)}
                               placeholder="What needs to be done?" />
              : null
          }
      </header>
    )
  }
}

export default Header;
