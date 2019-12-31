'use strict'

function countNumbers (acceptedStr) {
    let i;
    let maxI = acceptedStr.length;
    let returnedStr = '';
    for (i=0;i<maxI;i++) {
        if (Number(acceptedStr[i]) || Number(acceptedStr[i])===0) {
            returnedStr += acceptedStr[i];
        }
    }
    let firstObj = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0
    };
    let j;
    let maxJ = returnedStr.length;
    for (j=0;j<maxJ;j++) {
        firstObj[returnedStr[j]] += 1;
    }
    let returnedObj = {};
    let x;
    for (x=0;x<=9;x++) {
        if (firstObj[x]!=0) {
            returnedObj[x] = firstObj[x];
        }
    }
    return returnedObj;
}
countNumbers('1234ddffgfg67gnbghghm888');