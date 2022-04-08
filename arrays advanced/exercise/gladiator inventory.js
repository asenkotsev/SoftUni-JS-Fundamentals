function gladiatorInventory(arr) {
   inv = arr.shift().split(' ');
    for (let i = 0; i < arr.length; i++) {
        let list = arr[i].split(' ');
        let command = list[0];
        let equipment = list[1];
        let upgrade = list[2];
        switch (command) {
            case 'Buy':
                if (!(inv.includes(equipment))) {
                    inv.push(equipment);
                }
                break;
            case 'Trash':
                if (inv.includes(equipment)) {
                    let removeIndex = inv.indexOf(equipment);
                    inv.splice(removeIndex, 1);
                }
                break;
            case 'Repair':
                if (inv.includes(equipment)) {
                    let removeIndex = inv.indexOf(equipment);
                    inv.splice(removeIndex, 1);
                    inv.push(equipment);
                }
                break;
            case 'Upgrade':
                let list = equipment.split('-');
                let beforeUpgrade = list[0];
                let upgrade = list[1];
                if (inv.includes(beforeUpgrade)) {
                    let addIndex = inv.indexOf(beforeUpgrade);
                    inv.splice((addIndex + 1), 0, `${beforeUpgrade}:${upgrade}`);
                }
                break;
        }
    }
    console.log(inv.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)