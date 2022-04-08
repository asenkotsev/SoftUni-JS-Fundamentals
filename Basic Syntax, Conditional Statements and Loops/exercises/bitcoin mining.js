function mining(input) {
    let n = input.length;
    let bitcoinAmount = 0;
    let balance = 0;
    let dayOfFirstPurchasedBitcoin = 0;
    let bitcoinBought = false;
    let bitcoinBought1 = true;
    for (i = 1; i <= n; i++) {
        let goldAmount = input.shift()
        if ((i) % 3 == 0) {
            balance += (goldAmount * 0.7) * 67.51;
        } else {
            balance += goldAmount * 67.51;
        }
        while (balance >= 11949.16) {
            balance -= 11949.16;
            bitcoinBought = true;
            bitcoinAmount++;
        }
        if (bitcoinBought == true && bitcoinBought1 == true) {
            dayOfFirstPurchasedBitcoin = (i);
            bitcoinBought1 = false;
        }
    }
    console.log(`Bought bitcoins: ${bitcoinAmount}`);
    if (bitcoinAmount >= 1) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchasedBitcoin}`);
    }
    console.log(`Left money: ${balance.toFixed(2)} lv.`);
}

//mining([3124.15, 504.212, 2511.124])
mining([100, 200, 300])