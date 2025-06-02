const myCountry1 = {
    country:'India',
    capital: 'NewDelhi',
    language: 'Hindi',
    population: 1148,
    neighbours: ['Pakistan','Nepal','Bhutan','Myanmar'],

    describe: function(){
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries.`);
    },
    checkIsIsland: function(){
        this.isIsland = this.neighbours.length=== 0 ? true : false;
    }
}