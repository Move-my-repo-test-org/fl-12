'use strict'

function makeNumber(acceptedStr) {
    let i;
    let maxI = acceptedStr.length;
    let returnedStr = '';
    for (i=0;i<maxI;i++) {
        if (Number(acceptedStr[i]) || Number(acceptedStr[i])===0) {
            returnedStr += acceptedStr[i];
        }
    }
    return returnedStr;
}
makeNumber('123dhfh90gd344');