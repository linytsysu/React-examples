import React, {Component} from 'react';

import TodoStore from '../stores/TodoStore';

class TodoFooter extends Component {
    render() {
        let todoItems = TodoStore.getTodos();
        let todoIds = Object.keys(todoItems);
        let total = todoIds.length;
        let completed = 0;
        let unCompletedSpan = null;

        if (total === 0) {
            return null;
        }

        for (let key of todoIds) {
            if (todoItems[key].complete) {
                completed++;
            }
        }

        if (total - completed > 1) {
            unCompletedSpan = <span> <strong>{total - completed}</strong> items left </span>
        } else {
            unCompletedSpan = <span> <strong>{total - completed}</strong> item left </span>
        }

        return (
            <div id='todo-footer'>
                {unCompletedSpan}
            </div>
        );
    }
}

export default TodoFooter;