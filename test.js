var assert = require('assert');
var extend = require('./');
assert.deepEqual(extend({a:1}),             {a:1});
assert.deepEqual(extend({a:1}, []),         {a:1});
assert.deepEqual(extend({a:1}, null),       {a:1});
assert.deepEqual(extend({a:1}, true),       {a:1});
assert.deepEqual(extend({a:1}, false),      {a:1});
assert.deepEqual(extend({a:1}, {b:2}),      {a:1, b:2});
assert.deepEqual(extend({a:1, b:2}, {b:3}), {a:1, b:3});
var origin = {a:1, b:2};
var add = {b:3, c:4};
assert.deepEqual(extend(origin, add), {a:1, b:3, c:4});
assert.deepEqual(origin, {a:1, b:2});
assert.deepEqual(add, {b:3, c:4});
console.log('ok');
