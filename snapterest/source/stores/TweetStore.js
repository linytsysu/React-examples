var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var tweet = null;

function setTweet(receivedTweet) {
    tweet = receivedTweet;
}

function emitchange() {
    TweetStore.emit('change');
}

var TweetStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeChangeListener('change', callback);
    },
    getTweet: function() {
        return tweet;
    }
});

function handlerAction(action) {
    if (action.type === 'receive_tweet') {
        setTweet(action.tweet);
        emitchange();
    }
}

TweetStore.dispatchToken = AppDispatcher.register(handlerAction);

module.exports = TweetStore;