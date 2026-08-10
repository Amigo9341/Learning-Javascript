function placedOrder(callback){
    console.log("Payment is in progress");
    
    setTimeout(() => {console.log("Payment is received and order is now placed.")
    callback()}
    , 3000);
}

function preparingOrder(){
    console.log("Your food preparation is now started.");

    setTimeout(() => {console.log("Food is now out for delivery!")}, 5000);
}

placedOrder(preparingOrder);
