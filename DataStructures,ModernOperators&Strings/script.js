const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex, time, mainIndex, address }) {
        console.log(`Order received! ${restaurant.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered shortly at ${address} on ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
    },
    orderPizza: function (keyingredients, ...anyOthers) {
        console.log(keyingredients);
        console.log(anyOthers);
    }
};
restaurant.orderDelivery
    ({
        time: '18:30',
        address: 'Via Del Sole,21',
        starterIndex: 2,
        mainIndex: 2,
    })

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
const [x, y, z] = [1, 2, 3];
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);
console.log(second, first);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 1));
const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

const nested = [2, 3, [1, 4]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [4, 5];
console.log(p, q, r);

//Destructuring of Objects

const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

const { categories: types, location: venue, mainMenu: menu } = restaurant;
console.log(types, venue, menu);

const { food = [], location: place = [] } = restaurant;
console.log(food, place);

let s = 441;
let t = 224;
const obj = { s: 22, t: 12, u: 98 };
console.log(s, t);
({ s, t } = obj);
console.log(s, t);

const { fri: { open: o, close: cl } } = openingHours;
console.log(o, cl);

// Spreading Operators //

const array = [7, 8, 9];
const arr1 = [1, 2, array[0], array[1], array[2]];
console.log(arr1);

const arr2 = [5, 6, ...arr1];
console.log(arr2);
console.log(...arr2);

const arr3 = [...restaurant.categories, 'Paneer Butter Masala'];
console.log(arr3);

// Copy Array //

const copymainMenu = [...restaurant.mainMenu];
console.log(copymainMenu);

// Join 2 Arrays //

const joint = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joint);

// Iterables: Arrays, Strings, Maps, Sets. NOT Objects. //

const str = 'Jonas';
const letters = [...str, '', 'A.'];
console.log(...str);
console.log(letters);

// const ingredients = [prompt("What's the 1st ingredient?"),
// prompt("Ingredient 2?"), prompt("Ingredient 3?")
// ];
// console.log(ingredients);
// console.log(...ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects //

const restorante = { founded: 1990, ...restaurant, founder: 'Josh Italiano' }
console.log(restorante);

const newRestaurantCopy = { ...restaurant };
newRestaurantCopy.name = 'Leonardo Bonucci';
console.log(newRestaurantCopy.name);
console.log(restaurant.name);


// 1)DESTRUCTURING

//  SPREADING, Because on right side of '='
const Arr = [1, 2, ...[3, 4]];

//REST, because on left side of '='
const [m, l, , ...others] = [1, 2, 3, 4, 5];
console.log(m, l, others);

const [pizza, Risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, Risotto, otherFoods);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(openingHours);

//2) Functions
const add = function (...numbers) {
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    } console.log(sum);
}
add(1, 2);
add(8, 9, 54, 11);
add(87, 103, 47.02, 111, 123);
add(124, 1045, 12, 41, 36985, 14, 2154, 1);

const x1 = [23, 5, 7];
add(...x1);

restaurant.orderPizza('mushrooms', 'chilli', 'cheese', 'oregano', 'jalapenos');
restaurant.orderPizza('mushrooms');

//USE any data type,RETURN any data type//

console.log('---OR---');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 'Jonas');
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---AND---');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
    restaurant.orderPizza('Spinach', 'Mushrooms');
}

restaurant.orderPizza && restaurant.orderPizza('Spinach', 'Mushrooms');

restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest);

//NULLISH: Null or underfined(not 0 or '')
const guessCorrect = restaurant.numGuest ?? 10;
console.log(guessCorrect);

const rest1 = {
    name: 'Capri',
    // numOfGuests: 20,
    numOfGuests: 0,
};
const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};
//OR Assignmet Operator
// rest1.numOfGuests = rest1.numOfGuests || 10;
// rest2.numOfGuests = rest2.numOfGuests || 10;
// rest1.numOfGuests ||= 10;
// rest2.numOfGuests ||= 10;

//Nullish Assignment Operator (null) 
rest1.numOfGuests ??= 10;
rest2.numOfGuests ??= 10;

//AND Assignment Operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

//The for-of Loop//

const menuu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const aman of menuu)
    console.log(aman);

for (const aman of menuu.entries())
    // console.log(aman);
    console.log(`${aman[0] + 1}:${aman[1]} `)


if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

//WITH Optional Chaining

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['Mon', 'Tue', 'Wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(open);
    console.log(`On ${day}, we open at ${open}`);
}
//METHODS//

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.');

//Arrays//

const users = [{ naam: 'Jonas', email: 'jonas@gmail.co' }];
console.log(users[0]?.naam ?? 'User Array Empty')

//Object Keys, Values and Entries//

const properties = Object.keys(openingHours);
console.log(properties);


let openStr = `We are open on ${properties.length} days: `;

for (const din of properties) {
    openStr += `${din}, `
}
console.log(openStr);

//Property values//

const values = Object.values(openingHours);
console.log(values);

//Entire Object//

const entries = Object.entries(openingHours);
console.log(entries);

//[KEY,VALUE]
for (const [key, { open, close }] of entries) {
    console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
//SETS//
const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'
]);
console.log(orderSet);
console.log(new Set("Jonas"));
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has('Pasta'));
console.log(orderSet.has('Bread'));
orderSet.delete('Risotto');
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

//EXAMPLE

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);
console.log(new Set('jonasschmedtmann').size);

//Maps

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Italy');
rest.set(2, 'Lisbon,Portugal');

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', '11')
    .set('close', '23')
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get(open) && time < rest.get(close)));

console.log(rest.has('categories'));
rest.delete(2);
rest.clear();

// rest.set([1, 2], 'Test');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get([1, 2]));
//UNDEFINED 373//

const arry = [1, 2];
rest.set(arry, 'Test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arry));

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    ['1', 'C'],
    ['2', 'Java'],
    ['3', 'JavaScript'],
    ['Correct', 3],
    [true, 'Correct 🥳'],
    [false, 'Try Again'],
]);
console.log(question);

//Convert Object to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz App

console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your Answer'))
const answer = 3;
console.log(answer);

console.log(question.get(question.get('Correct') === answer));

//Convert map to array

console.log(question);
console.log(...question);
console.log([...question]);
console.log(question.entries());
console.log(question.values());
console.log(question.keys());

//STRINGS//

const airline = 'Vistara Airlines';
const plane = 'A147';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B247'[0]);
console.log('k459'[2]);

console.log(airline.length);
console.log(plane.length);
console.log('B247'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Airlines'));

console.log(airline.slice(1));
console.log(airline.slice(5));
console.log(airline.slice(8, 11));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(0, airline.indexOf(' ') + 2));
console.log(airline.slice(airline.lastIndexOf('r')));

console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
    //B and E are middle seats.
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        console.log('You got the middle seat😁');
    } else {
        console.log('You got Lucky!🥳')
    }
};
checkMiddleSeat('25B');
checkMiddleSeat('78D');
checkMiddleSeat('30E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));

//STRINGS PART-2//

//Fix capitalization in name//

const passenger = 'jONaS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails//
const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
console.log(lowerEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing//

const priceGB = '288,97Euros';
const priceUSA = priceGB.replace('Euros', '$').replace(',', '.');
console.log(priceUSA);
const announcement = 'All passengers come to Boarding Door 23. Come to Boarding Door 23!';
console.log(announcement.replace('Door', 'Gate'));
console.log(announcement.replaceAll('Door', 'Gate'));
console.log(announcement.replace(/Door/g, 'Gate'));

//Booleans//

const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airb'));

if (plane1.startsWith('Airb') && plane1.endsWith('neo')) {
    console.log("Part of the new Airbus family.");
}

//Practice examples//

const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('gun') || baggage.includes('knife')) {
        console.log('You are not allowed onboard.')
    } else { console.log('Welcome aboard!') }
};
checkBaggage('I have a Laptop,some Food and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection.');

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        console.log(n);
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

//Padding

const message = 'Go to Gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log(message.padStart(20, '*').padEnd(30, '*'));
console.log('AmanKumarGoswami'.padStart(20, '*').padEnd(30, '*'));
console.log('TheWeeknd'.padStart(20, 'XO').padEnd(30, 'XO'));

const maskedCreditcard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};
console.log(maskedCreditcard(897856));
console.log(maskedCreditcard(124596873652));
console.log(maskedCreditcard(874951623753));
console.log(maskedCreditcard(987123645852));

//Repeat

const message2 = 'Bad Weather...All Departures delayed!...';
console.log(message2.repeat(10));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`)
}
planesInLine(5);
planesInLine(15);
planesInLine(8);
planesInLine(2);