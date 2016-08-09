import React, {Component} from 'react';

import TodoItem from './TodoItem.react';
import TodoStore from '../stores/TodoStore';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: TodoStore.getTodos()
        }
        this.getTodoItemElement = this.getTodoItemElement.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({
            todoItems: TodoStore.getTodos()
        });
    }

    getTodoItemElement(id) {
        let todo = this.state.todoItems[id];
        return <TodoItem todo={todo} key={id} />
    }

    render() {
        let todoIds = TodoStore.getTodoIds();
        let todoItemElements = todoIds.map(this.getTodoItemElement);
        return (
            <div>
                {todoItemElements}
            </div>
        );
    }
}

export default TodoList;