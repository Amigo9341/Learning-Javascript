'use strict';

const bookings = [];

//ES6 method of setting default parameters
const createBooking = function (flightNum,
    numPassengers = 1,
    price = 199 * numPassengers + '$') {
    // ES5 method
    // numPassengers = numPassengers || 1;
    // price = price || '199$'

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('AL148', 202, '372$');
createBooking('PJ249', 135, '380$');
createBooking('SL151', 3);
createBooking('KS151', undefined, '365$');
createBooking('XZ151', 10, undefined);

//Values vs Reference(Passing Arguments)

const flight = 'LH254';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 2654146445,
}

const checkIn = function (flightNumb, passenger) {
    flightNumb = 'LH998',
        passenger.name = 'Mr. ' + passenger.name;

    // if (passenger.passport === 2654146445) {
    // //     alert('Checked in!')
    // } else {
    //     alert('Wrong Passport!')
    // }
}

// checkIn(flight, jonas);
// console.log(jonas);
// console.log(flight);

//Is the same as doing...
// const flightNumb = flight;
// const passenger = jonas; 

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
}
newPassport(jonas);
checkIn(flight, jonas);

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//HIGHER ORDER FUNCTION

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);

};
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

//JS uses callbacks

const high5 = function () {
    // console.log('🖐️');           BAAR BAAR PRINT HORA CLICK KARNE PAR ISLIYE COMMENT OUT KIYA
}
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

greet('Hey')('Aman!!');
const greeterHey = greet('Hey');
greeterHey('Satyam!');
greeterHey('Shaurya!');

greeterHey('Aman!');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Jonas!');


const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function () {}

    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    },
};

lufthansa.book(639, 'Aman Kumar Goswami');
lufthansa.book(777, 'Satyam Kumar Goswami');
lufthansa.book(96, 'Max Verstappen');
console.log(lufthansa);

const euroWings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// DOES NOT WORK
// BECAUSE HERE IT ACTS AS A NORMAL FUNCTION CALL
// book(23, 'Sarah Williams');
// CALL METHOD
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

book.call(lufthansa, 58, 'Bradley Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 183, 'Mary Cooper');
console.log(swiss);

//APPLY METHOD

const flightData = [67, 'Henry Creel'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(lufthansa.bookings);

// // BIND METHOD
// book.call(euroWings, 23, 'Sarah Williams');

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(25, 'Arvind Lindblad');

const bookEW100 = book.bind(euroWings, 100);
bookEW100('CoCo Gauff');
bookEW100('Alizeh');
// console.log(lufthansa);
// console.log(euroWings);

//With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//PARTIAL APPLICATION

// const addTax = function (rate, value) {
//     console.log(value + value * rate);
// }
// addTax(0.1, 200);

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addTax = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));

//Immediately Invoked Function Expression (IIFE)

const run0nce = function () {
    console.log('This will never run again!');
};
run0nce();

(function () {
    console.log('This will never run again!');
    const isPrivate = 23;
})();
(() => console.log('This will never run again!'))
    ();

{
    const isPrivate = 56;
    var notPrivate = 23;
}
// console.log(isPrivate);
console.log(notPrivate);

//NEXT IS CLOSURES. READ FROM LECTURE PDF. IMPORTANT STUFF HAI.