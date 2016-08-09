import React, {Component} from 'react';

import TodoStore from '../stores/TodoStore';

import TodoTextInput from './TodoTextInput.react';
import TodoList from './TodoList.react';
import TodoFooter from './TodoFooter.react';

import '../../less/index.less';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: TodoStore.getTodos()
        }
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

    render() {
        return (
            <div>
                <TodoTextInput />
                <TodoList todos={this.state.todoItems} />
                <TodoFooter />
            </div>
        );
    }
}

export default TodoApp;