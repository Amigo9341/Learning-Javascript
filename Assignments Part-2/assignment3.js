const percentageOfWorld3 = population => (population/7900)*100;

const descIndia = percentageOfWorld3(150);
const descChina = percentageOfWorld3(142);
const descUSA = percentageOfWorld3(30);

console.log(descIndia, descChina, descUSA);