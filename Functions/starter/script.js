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
