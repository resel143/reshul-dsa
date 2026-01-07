function minCoins(coins, amount) {

    coins.sort((a,b)=> b-a);
    let count = 0;

    for(let coin of coins){
        while(amount >= coin){
            amount -= coin;
            count++;
        }
    }

    return count;

}


console.log(minCoins([1, 5, 10, 25], 63));