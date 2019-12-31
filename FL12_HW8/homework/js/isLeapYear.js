'use strict'

let date;
function isLeapYear(date) { 
    let inputDate = new Date(date);
    if (inputDate.getFullYear()%400 === 0) {
        return `${inputDate.getFullYear()} is a leap year`;
    } else if (inputDate.getFullYear()%100 === 0) {
        return `${inputDate.getFullYear()} is not a leap year`;
    } else if (inputDate.getFullYear()%4 === 0) {
        return `${inputDate.getFullYear()} is a leap year`;
    } else if (!inputDate.getFullYear()) {
        return `Invalid Date`;
    } else {
        return `${inputDate.getFullYear()} is not a leap year`;  
    }
}
isLeapYear(1213131313);