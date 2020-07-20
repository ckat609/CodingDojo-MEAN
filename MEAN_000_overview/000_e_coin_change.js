function coins(aNumber) {
    let change = {};
    let amount = 0;

    if (typeof aNumber == 'object') {
        if (aNumber.dollars) {
            amount += aNumber.dollars * 100;
        }
        if (aNumber.quarters) {
            amount += aNumber.quarterse * 25;
        }
        if (aNumber.dimes) {
            amount += aNumber.dimes * 10;
        }
        if (aNumber.nickles) {
            amount += aNumber.nickles * 5;
        }
        if (aNumber.pennies) {
            amount += aNumber.pennies;
        }
        aNumber = amount;
    }

    if (Math.floor(aNumber / 100) > 0) {
        change['dollars'] = Math.floor(aNumber / 100);
        aNumber = aNumber % 100;
    }

    if (Math.floor(aNumber / 25)) {
        change['quarters'] = Math.floor(aNumber / 25);
        aNumber = aNumber % 25;
    }

    if (Math.floor(aNumber / 10)) {
        change['dimes'] = Math.floor(aNumber / 10);
        aNumber = aNumber % 10;
    }

    if (Math.floor(aNumber / 5)) {
        change['nickles'] = Math.floor(aNumber / 5);
        aNumber = aNumber % 5;
    }

    if (aNumber > 0) {
        change['pennies'] = aNumber;
    }



    return change;
}

console.log(coins(312));
console.log(coins({
    dollars: 2,
    dimes: 15,
    pennies: 5
}));