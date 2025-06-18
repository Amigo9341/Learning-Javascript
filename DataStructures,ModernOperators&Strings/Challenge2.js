const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//SOLUTION//
//1.
for (const [i, player] of game.scored.entries()) {
    console.log(` ${player} : Goal ${i + 1}`)
}
//2.
let average = 0;
for (const odd of Object.values(game.odds)) {
    console.log(odd);
    average += odd;
}
average /= Object.values(game.odds).length
console.log(average);
//3.
for (const [team, odd] of Object.entries(game.odds)) {
    // console.log(team, odd);
    const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}
