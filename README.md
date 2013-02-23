# util-extend

The Node object extending function that Node uses for Node!

## Usage

```
var extend = require('util-extend');
function functionThatTakesOptions(options) {
  var options = extend(options, defaults);
  // now any unset options are set to the defaults.
}
```
