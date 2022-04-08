function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetsBroken = 0;
    let swordsBroken = 0;
    let shieldsBroken = 0;
    let armorsBroken = 0;
    let armorBroke = false;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            helmetsBroken++;
        }
        if (i % 3 == 0) {
            swordsBroken++;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            shieldsBroken++;
            if(shieldsBroken > 3) {
                armorBroke = false;
            }
        }
        if (shieldsBroken % 2 == 0 && shieldsBroken !== 0 && armorBroke == false) {
            armorsBroken++;
            armorBroke = true;
        }
    }
    let expenses = helmetsBroken * helmetPrice + swordsBroken * swordPrice + shieldsBroken * shieldPrice + armorsBroken * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200,)