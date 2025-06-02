function describePopulation(country,population){
   const percentage = percentageOfWorld1(population);

    return`${country} has ${population} million people, which is about ${percentageOfWorld3} of the world.`
    
};
console.log(describePopulation('India', 1448));
console.log(describePopulation('Germany', 48));
console.log(describePopulation('UK', 128));