'use strict'

function getMin() {
    let i;
    let maxI = arguments.length;
    let min = arguments[0];
    for (i=1;i<maxI;i++) {
        if (min < arguments[i]) {
            min = min;
        } else {
            min = arguments[i];
        }
    }
    return min;
}
getMin(1, 2, 5, 0, 4);