const cart = ["shoes","kurta","bag","T-shirt"];
// promise is an object which respresent of eventual assyncronise operation

createOrder(cart)
.then(function(OrderId){
    console.log(OrderId);
    return OrderId;
})
.then(function(OrderId){
    return proceedToPayment(OrderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err);
})

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = Error("Cart is not Valid");
            reject(err);
        }

        const OrderId = "546435";
        if(OrderId){
            resolve(OrderId);
        }
    });
    return pr;
}

function proceedToPayment(OrderId){
   return new Promise(function(resolve,reject){
        resolve("Payment successfull")
    })
}

function validateCart(cart){
    return true; 
}
