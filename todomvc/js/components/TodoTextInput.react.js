import React, {Component} from 'react';

import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

class TodoTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    handleKeyDown(event) {
        if (event.target.value === '') {
            return;
        }
        if (event.keyCode === 13) {
            TodoActions.create(event.target.value);
            event.target.value = '';
        }
    }

    render() {
        return (
            <input id='todo-text-input' type='text' onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        );
    }
}

export default TodoTextInput;