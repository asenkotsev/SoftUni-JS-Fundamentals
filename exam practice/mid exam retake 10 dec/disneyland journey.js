function journey(arr) {
    let neededMoney = Number(arr[0]);
    let months = Number(arr[1]);
    let savedMoney = 0;
    for (let i = 1; i <= months; i++) {

        if (i % 2 != 0 && i != 1) {
            savedMoney -= savedMoney * 0.16;
        }

        if (i % 4 == 0) {
            savedMoney += savedMoney * 0.25;
        }

        savedMoney += 0.25 * neededMoney;
    }
    let leftoverMoney = Math.abs(neededMoney - savedMoney).toFixed(2);
    if (savedMoney >= neededMoney) {
        console.log(`Bravo! You can go to Disneyland and you will have ${leftoverMoney}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${leftoverMoney}lv. more.`);
    }
}

journey(['1000', '4'])