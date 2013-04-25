# util-extend

The Node object extending function that Node uses for Node!

## Usage

`extend(origin, add)` or `extend(origin, add, {replace: false})`

```
var extend = require('util-extend');
function functionThatTakesOptions(options) {
  var options = extend(defaults, options);
  // now any unset options are set to the defaults.
}
```

```
var extend = require('util-extend');
var util = require('util');

function Base() {
}

Base.prototype.a = function() {
  console.log('Base');
};

function AnotherBase() {
}

AnotherBase.prototype.a = function() {
  console.log('AnotherBase');
};

function Child() {
  Base.call(this);
  AnotherBase.call(this);
}

util.inherits(Child, Base);
extend(Child.prototype, AnotherBase.prototype, {replace: false});

var childInstance = new Child();

child.a(); // Output: Base
```
