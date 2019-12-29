'use strict'

let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let minEmailLength = 5;
let minPassLength = 6;
let email = prompt('Please enter your email', '');

if (email===null || !email) {
  alert('Canceled.');
} else if (email.length<minEmailLength) {
  alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email===userEmail || email===adminEmail) {
  let userPass = prompt('Please enter your password', '');
  if (userPass===null || !userPass) {
    alert('Canceled.');
  } else if (email===userEmail && userPass==='UserPass' || email===adminEmail && userPass==='AdminPass') {
    let changePassAnswer = confirm('Do you want to change your password?');
    if (!changePassAnswer) {
      alert('You have failed the change.');
    } else {
      let oldPass = prompt('Please enter your old password', '');
      if (oldPass===null || !oldPass) {
        alert('Canceled.');
      } else if (email===userEmail && oldPass==='UserPass' || email===adminEmail && oldPass==='AdminPass') {
        let newPass = prompt('Please enter your new password', '');
        if (newPass===null || !newPass) {
          alert('Canceled.');
        } else if (newPass.length<minPassLength) {
          alert('It\'s too short password. Sorry.')
        } else {
          let repeatPass = prompt('Please enter your new password again', '');
          if (repeatPass!==newPass) {
            alert('You wrote the wrong password.');
          } else {
            alert('You have successfully changed your password.');
          }
        }
      } else {
        alert('Wrong old password');
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don\'t know you');
}