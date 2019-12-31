'use strict'

let x;
function addOne(x) {
  return x + 1;
}

function pipe(x, ...functions) {
    let i;
    for (i=0;i<functions.length;i++) {
        x = functions[i](x);
    }
    return x;
}
pipe(1, addOne, addOne);