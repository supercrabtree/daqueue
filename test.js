import test from 'ava';
import createQueue from './';

console.log();
console.log(Date.now());

test('Create queue', t => {

  var queue = createQueue();
  t.is(queue.size, 0);

  var queue2 = createQueue(1, 2, 'me');
  t.is(queue2.size, 3);

});

test('enqueue', t => {

  var queue = createQueue(1, 2);
  queue.enqueue('hat');
  t.is(queue.size, 3);

});

test('dequeue', t => {

  var queue = createQueue('hat', 2);
  var dequeued = queue.dequeue();
  t.is(dequeued, 'hat');
  t.is(queue.size, 1);

});

test('front', t => {

  var queue = createQueue('hat', 2);
  var frontElement = queue.front();
  t.is(frontElement, 'hat');
  t.is(queue.size, 2);

});

test('toString', t => {

  var queue = createQueue('hat', 2, 5);
  t.is(queue.toString(), 'hat,2,5');

});

