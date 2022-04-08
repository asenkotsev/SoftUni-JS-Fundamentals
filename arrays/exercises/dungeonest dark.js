function dungeonestDark(arr) {
    let dungeon = arr[0].split('|');
    let health = 100;
    let coins = 0;
    for (let i = 0; i < dungeon.length; i++) {
        let currentRoom = dungeon[i].split(' ');
        let command = currentRoom[0];
        let num = Number(currentRoom[1]);
        if (command == 'potion') {
            if (health + num > 100) {
                if (health < 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health += num;
                }
                if (health > 100) {
                    health = 100;
                    console.log(`Current health: ${health} hp.`);
                } else {
                    console.log(`Current health: ${health} hp.`)
                }
            } else {
                console.log(`You healed for ${num} hp.`);
                health += num;
                console.log(`Current health: ${health} hp.`);
            }
        } else if (command == 'chest') {
            console.log(`You found ${num} coins.`);
            coins += num;
        } else {
            if (health > num) {
                health -= num;
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}


//dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])