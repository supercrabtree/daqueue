import test from 'ava';
import createQueue from './';

console.log();
console.log(Date.now());

test('size', t => {

  var queue = createQueue();
  t.is(queue.size, 0);

  var queue2 = createQueue(1, 2, 'me');
  t.is(queue2.size, 3);

});

test('front', t => {

  var queue = createQueue('hat', 2);
  t.is(queue.front, 'hat');
  t.is(queue.size, 2);

});

test('enqueue()', t => {

  var queue = createQueue(1, 2);
  queue.enqueue('hat');
  t.is(queue.size, 3);

});

test('dequeue()', t => {

  var queue = createQueue('hat', 2);
  var dequeued = queue.dequeue();
  t.is(dequeued, 'hat');
  t.is(queue.size, 1);

});

test('toString()', t => {

  var queue = createQueue('hat', 2, 5);
  t.is(queue.toString(), 'hat,2,5');

});

test('toArray()', t => {

  var queue = createQueue('hat', 2);
  var queueAsArray = queue.toArray();
  t.is(queue.size, 2);
  t.deepEqual(queueAsArray, ['hat', 2]);

});

