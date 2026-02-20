'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  //ITS LIKE .textContent = 0

  movements.forEach(function (mov, i) {

    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
      `;
    ;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
};
displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - '));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; //COMMENTED CUZ OF UPPER PROJECT SAME (MOVEMENTS)

// for (const movement of movements) {

//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   }
//   else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('----FOR EACH----');
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   }
//   else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

for (const [i, movement] of movements.entries()) { //MUST READ - THE ORDER OF THE PARAMETERS OF THE FOR-OF entries() FUNCTION(loop) WHERE THE 1ST ONE IS THE INDEX OF THE ARRAY, 2ND IS THE ELEMENT OF THE ARRAY.
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  }
  else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  };
};

console.log('----FOR EACH----');

movements.forEach(function (mov, i, arr) { //MUST READ - THE ORDER OF THE PARAMETERS OF THE forEach *call back* FUNCTION(loop) WHERE THE 1ST ONE IS THE ELEMENT IN THE ARRAY, 2ND IS THE INDEX, 3RD IS THE ARRAY.
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  }
  else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// THE DIFF B/W BOTH LOOPS IS - YOU WON'T BE ABLE TO BREAK OUT OF THE FOR-OF LOOP BUT CAN DO IN THE forEach LOOP.

//MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

//SET
const currenciesUnique = new Set([
  'USD', 'GBP', 'USD', 'EUR', 'EUR'
])
console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {  //KEY IS NON EXISTENT IN THIS SET
//   console.log(`${key} : ${value}`);                    // THERE IS NO VALUE FOR A KEY HERE. ITS ONLY VALUES HERE.
// })
currenciesUnique.forEach(function (value, _, map) {       // '_' IS A THROWAWAY VARIABLE WHICH MEANS A VARIABLE WHICH IS UNNECESSARY.
  console.log(`${value} : ${value}`);                     // SO ITS VALUE FOR VALUE.
})
