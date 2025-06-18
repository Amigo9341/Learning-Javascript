const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

//SOLUTION//
//1.
const events = [...new Set(gameEvents.values())];
console.log(events);
//2.
gameEvents.delete(64);
console.log(gameEvents);
//3.
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

const tim = [...gameEvents.keys()].pop();
console.log(tim);
console.log(`An event happened, on average, every ${tim / gameEvents.size} minutes`);
//4.
let half;
for (const [key, value] of gameEvents) {
    if (key < 45) {
        half = '[FIRST HALF]'
    }
    else { half = '[SECOND HALF]' }
    console.log(`${half} ${key}: ${value}`)


}
