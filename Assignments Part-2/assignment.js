function describeCountry(country,population,capitalCity){
    const description = `${country} has ${population} people and its capital city is ${capitalCity}`
    return description;
}


console.log(describeCountry('Finland', '12 million', 'Helsinki'));

const India = describeCountry('India', '150 billion', 'New Delhi');
const Germany = describeCountry('Germany', '83 million', 'Berlin');
const Italy = describeCountry('Italy', '12 million', 'Rome');
console.log(India);
console.log(Germany);
console.log(Italy);

