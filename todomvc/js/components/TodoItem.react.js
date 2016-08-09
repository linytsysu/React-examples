import React, {Component} from 'react';

import TodoActions from '../actions/TodoActions';

let todoItemStyle = {
    checked: {
        color: "#C8C7CC"
    },
    unchecked: {
        color: "#000000"
    }
}

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onCheckboxChange(event) {
        TodoActions.toggle(this.props.todo);
    }

    onButtonClick(event) {
        TodoActions.remove(this.props.todo.id);
    }

    render() {
        let textStyle;
        if (this.props.todo.complete) {
            textStyle = todoItemStyle.checked;
        } else {
            textStyle = todoItemStyle.unchecked;
        }
        return (
            <div>
                <input type='checkbox' onChange={this.onCheckboxChange} />
                <span style={textStyle}>{this.props.todo.text}</span>
                <input type='button' onClick={this.onButtonClick} value='remove' />
            </div>
        );
    }
}

export default TodoItem;