import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    create: function(text) {
        AppDispatcher.dispatch({
            type: 'TODO_CREATE',
            text: text
        });
    },
    remove: function(id) {
        AppDispatcher.dispatch({
            type: 'TODO_REMOVE',
            id: id
        })
    },
    toggle: function(todo) {
        let id = todo.id;
        let type = todo.complete ? 'TODO_UNCOMPLETE' : 'TODO_COMPLETE';
        AppDispatcher.dispatch({
            type: type,
            id: id
        });
    }
};