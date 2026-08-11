const orderDetail = {
    orderId : 121236,
    food : ["Pizza", "Biryani", "Coke"],
    cost : 610,
    customerName : "Rohit",
    customerLocation : "Dwarka",
    restaurantLocation : "Delhi"
}

function placedOrder(orderDetail, callback){
    console.log(`Rs. ${orderDetail.cost} Payment is in progress`);
    
    setTimeout(() => {console.log("Payment is received and order is now placed.")
        orderDetail.status = true;
    callback(orderDetail)}
    , 3000);
}

function preparingOrder(orderDetail, callback){
    console.log(`Your food preparation is now started of ${orderDetail.food}`);

    setTimeout(() => {console.log("Food is now out for delivery!")
        orderDetail.token = 123;
        callback(orderDetail)
    }, 5000);
}

function pickupOrder(orderDetail, callback){
    console.log(`Delivery Boy is on the way to pickup the order from ${orderDetail.restaurantLocation}.`);

    setTimeout(() => {console.log("I have picked up the order.")
        orderDetail.received = true;
        callback(orderDetail)
    }, 5000)
}

function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customerLocation}.`);

    setTimeout(() => {console.log("Order delivered SUCCESSFULLY!!!")
    orderDetail.delivery = true;
    }, 5000)
}


placedOrder(orderDetail, (orderDetail) => {
    preparingOrder(orderDetail, (orderDetail) => {
        pickupOrder(orderDetail, (orderDetail) => {
            deliverOrder(orderDetail)
        })
    });
})
