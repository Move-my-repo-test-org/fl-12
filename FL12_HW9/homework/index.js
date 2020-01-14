'use strict'

const zeroNum = 0;
const oneNum = 1;
const testArg1 = 2;
const testArg2 = 3;
const testArg3 = 8;
const minValue = 30;
const testArg4 = 35;
const testArg5 = 48;
const dayMs = 86400000;
const year19 = 2019;
const hours10 = 10;


function convert(...args) {
    let newArray = [];
    for (let arg of args) {
        typeof arg === 'string' ? newArray.push(parseInt(arg)) : newArray.push(String(arg));
    }
    return newArray;
}
convert(testArg1, '3', '5');

function executeforEach(array, func) {
    for (let el of array) {
        func(el);
    }
}

function mapArray(array, func) {
    let newArray = [];
    let result = [];
    for (let el of array) {
        newArray.push(typeof el === 'string' ? parseInt(el) : el);
    }
    executeforEach(newArray, function(el) {
        result.push(func(el))
    });
    return result;
}
mapArray([testArg1, '5', testArg3], function(el) {
    return el + testArg2;
});

function filterArray(array, func) {
    let result = [];
    executeforEach(array, function(el) {
        if (func(el)) {
            result.push(el);
        }
    });
    return result;
}
filterArray([testArg1, testArg2, testArg3], function(el) {
    return el % testArg1 === zeroNum;
});

function flipOver(str) {
    let newStr = [];
    for (let i=0; i<str.length; i++) {
        newStr += str[str.length-oneNum-i];
    }
    return newStr;
}
flipOver('hey world');

function makeListFromRange(range) {
    let result = [];
    for (let i=0; i<=range[1]-range[0]; i++) {
        result[i]=range[0]+i;
    }
    return result;
}
makeListFromRange([testArg1, testArg3]);

function getArrayOfKeys(arrayOfObjects, keyName) {
    let result = [];
    executeforEach(arrayOfObjects, function(el) {
        result.push(el[keyName])
    });
    return result;
}
const actors = [
    {name: 'tommy', age: 36},
    {name: 'lee', age: 28}
];
getArrayOfKeys(actors, 'name');


function substitute(array) {
    let result = [];
    mapArray(array, function(el) {
        result.push(el<minValue ? el='*' : el)
    });
    return result;
}
substitute([testArg4, testArg2, testArg5, testArg1, testArg3]);

function getPastDay(date, numberOfDays) {
    return new Date(date.getTime() - numberOfDays*dayMs).getDate();
}
const date = new Date(year19, zeroNum, testArg1);
getPastDay(date, oneNum); // 1, (1 Jan 2019)

function formatDate(date) {
    let newDate;
    let YYYY = date.getFullYear();
    let M = date.getMonth() + oneNum;
    let D = date.getDate();
    let HH = date.getHours();
    if (HH < hours10) {
        HH = '0' + HH;
    }
    let mm = date.getMinutes();
    newDate = `${YYYY}/${M}/${D} ${HH}:${mm}`;
    return newDate;
}
formatDate(new Date('6/15/2018 09:15:00')) 