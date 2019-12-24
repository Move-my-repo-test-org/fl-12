'use strict';
let a, b, c;
a = prompt('Please, input value for a', '1');
if (a===null || isNaN(Number(a)) || Number(a)===0) {
  console.log('Invalid input data');
} else {
    a = Number(a);
    b = prompt('Please, input value for b', '1');
    if (b===null || !b || isNaN(Number(b))) {
      console.log('Invalid input data');
    } else {
        b = Number(b);
        c = prompt('Please, input value for c', '1');
        if (c===null || !c || isNaN(Number(c))) {
        console.log('Invalid input data');
        } else {
            c = Number(c);
            const two = 2;
            const four = 4;
            let discr = Math.pow(b, two) - four*a*c;
            if (discr<0) {
              console.log('no solution');
            } else if (discr>0) {
                let x1 = (-b + Math.sqrt(discr))/(two*a);
                let x2 = (-b - Math.sqrt(discr))/(two*a);
                console.log('x1 =', x1);
                console.log('and x2 =', x2);  
            } else {
                let x = -b/(two*a);
                console.log('x =', x);
            }            
        }
    }
}
