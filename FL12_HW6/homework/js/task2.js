'use strict';
let a, b, c;
a = prompt('Please, input value for the first side of triangle', '1');
b = prompt('Please, input value for the second side of triangle', '1');
c = prompt('Please, input value for the third side of triangle', '1');
if (isNaN(Number(a)) || isNaN(Number(b)) || isNaN(Number(c)) || a===null || b===null || c===null || !a || !b || !c) {
  alert('Input values should be ONLY numbers');
} else if (Number(a)<=0 || Number(b)<=0 || Number(c)<=0 ) {
  alert('A triangle must have 3 sides with a positive definite length');
} else {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  if (a+b<=c || a+c<=b || b+c<=a) {
    console.log('Triangle doesn’t exist');
  } else if (a===b && b===c) {
    console.log('Equilateral triangle');         
  } else if (a===b || b===c || c===a) {
    console.log('Isosceles triangle'); 
  } else {
    console.log('Scalene triangle');
  }
}
