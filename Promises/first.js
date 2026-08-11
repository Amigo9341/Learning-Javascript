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

// const A1 = new Promise((resolve, reject) => {
//     reject("Hello");
// })

// A1.then((answer) => {
//     console.log(answer)})
//     .catch((wrong) => {
//         console.log(wrong)
//     })

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

//CALLBACK HELL IMPROVISING

const orderDetail = {
    orderId : 121236,
    food : ["Pizza", "Biryani", "Coke"],
    cost : 610,
    customerName : "Rohit",
    customerLocation : "Dwarka",
    restaurantLocation : "Delhi"
}

function placedOrder(orderDetail){
    console.log(`Rs. ${orderDetail.cost} Payment is in progress`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.05) {
                console.log("Payment is received and order is now placed.")
        orderDetail.status = true;
        resolve(orderDetail)}
        else{
            reject("Payment is failed");
        }
    }, 3000);
    })
    
    
}

function preparingOrder(orderDetail){
    console.log(`Your food preparation is now started of ${orderDetail.food}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random > 0.9){
            console.log("Food is now out for delivery!")
        orderDetail.token = 123;
        resolve(orderDetail)}
        else{
            reject("Food is not prepared yet!")
        }
    }, 5000);
    })   
}

function pickupOrder(orderDetail){
    console.log(`Delivery Boy is on the way to pickup the order from ${orderDetail.restaurantLocation}.`);

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(Math.random > 0.9){
                console.log("I have picked up the order.")
        orderDetail.received = true;
        resolve(orderDetail)}
        else{
        reject("Order cannot be picked!")
    }
    }, 5000)
    
    })    
}

function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customerLocation}.`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random > 0.9) {
                console.log("Order delivered SUCCESSFULLY!!!")
    orderDetail.delivery = true;
    resolve(orderDetail)}
    else{
        reject("Order cannot be delivered!!")
    }
    }, 5000)
    })
}


placedOrder(orderDetail)
.then((orderDetail) => preparingOrder(orderDetail))
.then((orderDetail) => pickupOrder(orderDetail))
.then((orderDetail) => deliverOrder(orderDetail))
.then((orderDetail) => {
    console.log(orderDetail);
})
.catch((error) => {console.log("ERROR ",error)
});