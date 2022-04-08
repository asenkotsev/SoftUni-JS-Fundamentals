function xpGaining(input) {
    let neededXp = Number(input.shift());
    let battleCount = Number(input.shift());
    let currentXp = Number(input.shift());
    let totalXp = 0;
    let currentBattleCount = 1;
    while (currentBattleCount <= battleCount) {

        if (currentBattleCount % 3 == 0) {
            totalXp += currentXp * 1.15;
        } else if (currentBattleCount % 5 == 0) {
            totalXp += currentXp * 0.9;
        } else {
            totalXp += currentXp;
        }

        if (totalXp >= neededXp) {
            break;
        }
        currentBattleCount++;
        currentXp = Number(input.shift());
    }

    if (neededXp <= totalXp) {
        console.log(`Player successfully collected his needed experience for ${currentBattleCount} battles.`)
    } else {
        let neededExperience = neededXp - totalXp;
        console.log(`Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`)
    }
}

xpGaining(['500', '5', '50', '100', '200', '100', '30'])
xpGaining([500, 5, 50, 100, 200, 100, 20])