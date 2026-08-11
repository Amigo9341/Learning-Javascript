// const p1 = fetch("https://api.github.com/users");

// const p2 = p1.then((output) => {
//     return output.json()});

// p2.then((data) => {console.log(data)})

// fetch("https://api.github.com/usrs")
// .then((fulfilledOrNot) => {
//     if(!fulfilledOrNot.ok){                                             //here in the fetch I jsut typed the wrong URL and it still gets fulfiiled not rejecteed
//         throw new Error("Data is not present in the server😫")          //Hence this got printed
//    }
//     return fulfilledOrNot.json()})
// .then((final) => {
//     const parent = document.getElementById("first");

//     for(let i = 0; i < final.length; i++) {

//     const image = document.createElement("img");
//     image.src = final[i].avatar_url;
//     image.style.height = "140px";
//     image.style.width = "140px";
    
//     parent.append(image);
//     }
// })
// .catch((error) => {                                             //When the server is down or the Internet or DNS is down, then this will take place.
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
// })

//CREATING PROMIMSES

const A1 = new Promise((resolve, reject) => {
    reject("Hello");
})

A1.then((answer) => {
    console.log(answer)})
    .catch((wrong) => {
        console.log(wrong)
    })

// const j1 = {
//     name: "Aman",
//     age: 22,
//     address: "Bokaro",
//     d: undefined
// }

// const jsonText = JSON.stringify(j1);
// console.log(jsonText);

// const j2 = `{
//     "name":"Aman",
//     "age":22,
//     "address":"Bokaro"
// }`                                              //JSON exists in String format. That's why "`" is used.
// const JSObj = JSON.parse(j2);
// console.log(JSObj);