
const cart = ["Web3 Fundamentals Course", "Advanced Smart Contracts Course"];
let walletBalance = 500; 

// - Asynchronous Functions (each returns a Promise) -

function createOrderw(cart) {
    return new Promise((resolve, reject) => {
        console.log("1. Creating order...");
        setTimeout(() => {
            if (cart.length > 0) {
                const orderId = "ORD123";
                const amount = cart.length * 150; // Each course costs 150
                console.log(`   Order created with ID: ${orderId}`);
                resolve({ orderId, amount });
            } else {
                reject(new Error("Your cart is empty. Cannot create order."));
            }
        }, 1000);
    });
}

function proceedToPayment(orderDetails) {
    return new Promise((resolve, reject) => {
        console.log("2. Proceeding to payment...");
        setTimeout(() => {
            if (orderDetails.amount > 0) {
                console.log(`   Payment of $${orderDetails.amount} successful.`);
                resolve({ paymentId: "PAY456", amountPaid: orderDetails.amount });
            } else {
                reject(new Error("Payment failed: Amount must be greater than zero."));
            }
        }, 1000);
    });
}

function showOrderSummary(paymentInfo) {
    return new Promise((resolve, reject) => {
        console.log("3. Showing order summary...");
        setTimeout(() => {
            if (paymentInfo.paymentId) {
                const summary = `Order successful! You paid $${paymentInfo.amountPaid}.`;
                console.log(`   Summary: ${summary}`);
                // Pass the amount paid to the next step
                resolve({ summary, amountPaid: paymentInfo.amountPaid });
            } else {
                reject(new Error("Could not show summary: Payment info missing."));
            }
        }, 500);
    });
}

function updateWallet(summaryInfo) {
    return new Promise((resolve, reject) => {
        console.log("4. Updating wallet...");
        setTimeout(() => {
            const newBalance = walletBalance - summaryInfo.amountPaid;
            if (newBalance >= 0) {
                walletBalance = newBalance;
                console.log(`   Wallet updated. New balance: $${walletBalance}`);
                resolve(walletBalance);
            } else {
                reject(new Error("Wallet update failed: Insufficient funds."));
            }
        }, 500);
    });
}


// --- The Promise Chain ---
createOrder(cart)
    .then(orderDetails => {
        
        return proceedToPayment(orderDetails);
    })
    .then(paymentInfo => {
        return showOrderSummary(paymentInfo);
    })
    .then(summaryInfo => {
        return updateWallet(summaryInfo);
    })
    .then(finalBalance => {
       
        console.log(`\n🎉 Checkout complete! Final wallet balance: $${finalBalance}`);
    })
    .catch(error => {

        console.error(`\n❌ An error occurred: ${error.message}`);
    });