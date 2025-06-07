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


