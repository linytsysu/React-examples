import React, {Component} from 'react';
import classNames from 'classnames';

import TodoActions from '../actions/TodoActions';

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
        return (
            <div className={ classNames( 'todo-item', {'completed-todo-item': this.props.todo.complete} ) } >
                <input type='checkbox' onChange={this.onCheckboxChange} />
                <span className='todo-text'>{this.props.todo.text}</span>
                <button className='remove-btn' onClick={this.onButtonClick}></button>
            </div>
        );
    }
}

export default TodoItem;