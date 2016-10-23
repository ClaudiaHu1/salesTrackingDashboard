/**
 * Created by huzhenzhe on 10/21/16.
 */

'use strict';
var stripe = require("stripe")("sk_test_X4Fe8jtFkuhFQcWxnRt1XXLT");

stripe.charges.create({
    amount: 100,
    currency: 'usd',
    customer: customer.id
}, function(err, charge) {
    if (err) {
        console.log("Can't get data successfully");
    } else {
        // successful charge
        console.log("get data successfully"+charge);

    }
});

stripe.customers.list(
    { limit: 10 },
    function(err, customers) {
        // asynchronously called
        console.log("get the customers detials"+customers);
    }
);
