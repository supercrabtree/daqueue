module.exports = function () {
  'use strict';


  // for keeping track of items in the queue, using separate indexs rather than
  // array.unshift to keep a time complexity of O(1)

  var newestIndex = 0;
  var oldestIndex = 0;


  // the private internal array the queue will use

  var dataStore;


  // if arguments are passed, set them as the initial contents of the dataStore

  if (arguments.length) {
    dataStore = Array.prototype.slice.call(arguments);
    newestIndex = arguments.length;
  } else {
    dataStore = [];
  }


  var queue = {


    // properties

    get size() {
      return newestIndex - oldestIndex;
    },

    get front() {
      return dataStore[oldestIndex];
    },


    // methods

    enqueue: function (data) {
      dataStore[newestIndex] = data;
      newestIndex++;
      return queue;
    },
    dequeue: function () {
      var item = dataStore[oldestIndex];

      // set to undefined to ensure no memory leaks
      dataStore[oldestIndex] = undefined;
      oldestIndex++;

      return item;
    },
    toString: function () {
      return queue.toArray().toString();
    },
    toArray: function () {
      return dataStore.slice(oldestIndex);
    }
  };

  return Object.freeze(queue);

};
