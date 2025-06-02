const neighbours = ['China','Pakistan','Nepal','Bangladesh'];
const newNeighbours = neighbours.push('Utopia');
const removedNeighbour = neighbours.pop();

console.log(newNeighbours);
console.log(removedNeighbour);

if(neighbours.includes('Germany')){
    console.log('Probably a central European country')
}else{console.log('Probably not a central European country :D')};

console.log(neighbours.indexOf('Pakistan'));

neighbours[neighbours.indexOf('Pakistan')] = 'Myanmar';
console.log(neighbours);