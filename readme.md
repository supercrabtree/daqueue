# daqueue [![Build Status](https://travis-ci.org/supercrabtree/daqueue.svg?branch=master)](https://travis-ci.org/supercrabtree/daqueue)

All of the implementations of queues I found attached everything to the
`prototype` and didn't make good of private encapsulation, getters,
non-enumerable methods, etc.

This queue does not use Array#shift internally, so it keeps O(1) rather than
O(n).

So here it is, a clean implementation of a queue written in straight simple
es5.

## API

#### Create a queue

```js
var createQueue = require('daqueue');

var queue = createQueue(); // => Creates an empty queue

var queue = createQueue('hat', 'tree', 'golf'); // => Creates a queue with initial values
```

#### queue.size

The `size` property works exactly the same as `length` on Array.

```js
var queue = createQueue(1, 2, 3);

queue.size // => 3
```

#### queue.front

A property containing the first item in the queue.

```js
var queue = createQueue('hat', 'tree', 'golf');

queue.first // => 'hat'
```

#### queue.enqueue()

Add a new item to the queue. Returns the queue for chaining.

```js
var queue = createQueue();

queue.enqueue('hat');
queue.enqueue('tree').enqueue('house');

// queue is => ['hat', 'tree', 'house']
```

#### queue.dequeue()

Gets the next item in the queue.

```js
var queue = createQueue('hat', 'tree', 'golf');

queue.dequeue() // => 'hat'
// queue is => ['tree', 'golf']
```

#### queue.toString()

Get the current queue as a string.

```js
var queue = createQueue(1, 2, 3);

queue.toString() // => "1,2,3"
```

#### queue.toArray()

Copy the current queue into a regular array.

```js
var queue = createQueue(1, 2, 3);

queue.toArray() // => [1, 2, 3]
```
