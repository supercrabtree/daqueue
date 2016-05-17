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
