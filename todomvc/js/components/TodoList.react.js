import React, {Component} from 'react';

import TodoItem from './TodoItem.react';
import TodoStore from '../stores/TodoStore';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.getTodoItemElement = this.getTodoItemElement.bind(this);
    }

    getTodoItemElement(id) {
        let todo = this.props.todos[id];
        return <TodoItem todo={todo} key={id} />
    }

    render() {
        let todoIds = Object.keys(this.props.todos);
        let todoItemElements = todoIds.map(this.getTodoItemElement);
        return (
            <div id='todo-list'>
                {todoItemElements}
            </div>
        );
    }
}

export default TodoList;