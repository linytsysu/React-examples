import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';

let CHANGE_EVENT = 'change';

let todos = {};

function createTodo(text) {
    let todoId = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    todos[todoId] = {
        id: todoId,
        text: text,
        complete: false
    }
}

function removeTodo(todoId) {
    delete todos[todoId];
}

function updateTodo(todo) {
    todos[todo.id] = assign({}, todos[todo.id], todo);
}

let CollectionStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    getTodos: function() {
        return todos;
    }
});

function handleAction(action) {
    switch (action.type) {
        case 'TODO_CREATE':
            createTodo(action.text);
            CollectionStore.emitChange();
            break;
        case 'TODO_REMOVE':
            removeTodo(action.id);
            CollectionStore.emitChange();
            break;
        case 'TODO_COMPLETE':
            updateTodo(action.id, {complete: true});
            CollectionStore.emitChange();
            break;
        case 'TODO_UNCOMPLETE':
            updateTodo(action.id, {complete: false});
            CollectionStore.emitChange();
            break;
        default:
    }
}

CollectionStore.dispatchToken = AppDispatcher.register(handleAction);

export default CollectionStore;