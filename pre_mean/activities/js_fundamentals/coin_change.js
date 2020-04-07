function coinChange(cents){
    let dollar = Math.floor(cents/100);
    cents -= 100*dollar
    let quarter = Math.floor(cents/25);
    cents -= 25*quarter
    let dime = Math.floor(cents/10);
    cents -= 10*dime
    let nickel = Math.floor(cents/5);
    cents -= 5*nickel
    let penny = cents;
    console.log(`Dollars: ${dollar}, Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel}, Pennies: ${penny}`)
};

coinChange(78)
coinChange(312)