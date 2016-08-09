import React, {Component} from 'react';

import TodoTextInput from './TodoTextInput.react';
import TodoList from './TodoList.react';

class TodoApp extends Component {
    render() {
        return (
            <div>
                <TodoTextInput />
                <TodoList />
            </div>
        );
    }
}

export default TodoApp;