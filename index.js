module.exports = function () {
  'use strict';


  // for keeping track of items in the queue

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


  return Object.create(null, {


    // properties

    size: {
      get: function () {
        return newestIndex - oldestIndex;
      }
    },


    // methods

    enqueue: {
      value: function (data) {
        dataStore[newestIndex] = data;
        newestIndex++;
      }
    },
    dequeue: {
      value: function () {
        var item = dataStore[oldestIndex];
        dataStore[oldestIndex] = undefined;
        oldestIndex++;
        return item;
      }
    },
    front: {
      value: function () {
        return dataStore[oldestIndex];
      }
    },
    toString: {
      value: function () {
        return this.toArray().toString();
      }
    },
    toArray: {
      value: function () {
        return dataStore.slice(oldestIndex);
      }
    }
  });

};
