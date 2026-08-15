// //async await
// //async function always retrurns a promise 

// // async function greet() {
// //     // return "Rohit";                                      will wrap it up in promise..if promise is accepted then the value will be returned

// //     return new Promise((resolve, reject) => {
// //         resolve("Rohit");                                   //will return the value as its already a promise
// //     })
// // }

// // const response = greet();
// // // console.log(response);
// // response.then((data) => console.log(data))
// // .catch((error) => {
// //     console.log("Error: ", error)
// // })

// // fetch("https://api.github.com/users")
// // .then((data) => data.json())
// // .then((output) => console.log(output));

// // const data = await fetch("https://api.github.com/users");             //fetch is an asynchronous function, will take time to execute. JS wont wait, will move to next line
// // const output = await data.json();                                     //this is also an asynchronous function, JS will throw error
// // console.log(output);                                            //Using await will stop JS to goto next line until the task isnt finished.

// // console.log("yooooo");                                          //This await can freeze everything i.e., until the task isnt complete, JS wont move.

// async function github() {
//     console.log("Hello World")                                  //Synchronous task hai to perform ho jayega
//     const data = await fetch("https://api.github.com/users");    //Ab idhar same Web API ko dene wala kaam ho jayega and JS move forward krega. 
//     const output = await data.json(); 
//     // console.log(output); 


//     const parent = document.getElementById("first")

//     for(let user of output) {

//         const element = document.createElement("div");
//         element.classList.add("user");

//         const image = document.createElement("img");
//         image.src = user.avatar_url;

//         const userName = document.createElement("h2");
//         userName.textContent = user.login;

//         const anchor = document.createElement("a");
//         anchor.href = user.html_url;
//         anchor.textContent = "Visit Profile";

//         element.append(image,userName,anchor);
//         parent.append(element);
//     }
    
// }

// github();
// // console.log("yooooo");  
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


// placedOrder(orderDetail)
// .then((orderDetail) => preparingOrder(orderDetail))          Instead of this complex solution, we shall use ASYNC Function
// .then((orderDetail) => pickupOrder(orderDetail))
// .then((orderDetail) => deliverOrder(orderDetail))
// .then((orderDetail) => {
//     console.log(orderDetail);
// })
// .catch((error) => {console.log("ERROR ",error)
// });

async function solution() {

    try{
    
    const response1 = await placedOrder(orderDetail);
    const response2 = await preparingOrder(response1);
    const response3 = await pickupOrder(response2);
    const response4 = await deliverOrder(response3);
    console.log(response4);
    }
    catch(error){
        console.log("ERROR: ", error);
    }
}
solution();

async function Aman() {
    // const comment = await fetch("userComment");
    // const likes = await fetch("userLikes");
    // const shares = await fetch("userShares");

    //In above case, we have to wait for each line to execute to moveon to the next line
    //To execute the three lines parallely ek saath,just do like the line below.

    const [comment, likes, shares] = await Promise.all([fetch("userComment"), fetch("userLikes"), fetch("userShares")])
}