function treasureHunt(input) {
    let inv = input.shift().split('|');

    const drop = (index) => {
        if (index >= 0 && index < inv.length) {
            index = Number(index);
            inv.push(inv[index]);
            inv.splice(index, 1);
        }
    }
    const steal = (count) => {
        count = Number(count);
        if (count <= inv.length) {
            let stolenItems = inv.splice(- count, count);
            console.log(stolenItems.join(', '));
        }
    }

    const loot = (items) => {
        items = items.split(' ');
        items.shift();
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (!inv.includes(item)) {
                inv.unshift(item);
            }
        }
    }

    for (const line of input) {
        let [command, token] = line.split(' ');

        if (command == 'Drop') {
            drop(token);
        } else if (command == 'Loot') {
            loot(line);
        } else if (command == 'Steal') {
            steal(token);
        }
    }

    let sum = 0;
    for (let i = 0; i < inv.length; i++) {
        sum += inv[i].length;
    }

    let average = (sum / inv.length).toFixed(2);

    if (inv.length == 0) {
        console.log('Failed treasure hunt.')
    } else {
        console.log(`Average treasure gain: ${average} pirate credits.`)
    }
}

treasureHunt([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
])

treasureHunt([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
]
)