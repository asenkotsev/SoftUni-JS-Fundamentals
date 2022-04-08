function friendListMaintenance(input) {
    let list = input.shift().split(', ');
    let lostCount = 0;
    let blacklistCount = 0;

    const blacklist = (name) => {
        if (list.includes(name)) {
            let index = list.indexOf(name);
            list[index] = 'Blacklisted';
            console.log(`${name} was blacklisted.`);
            blacklistCount++;
        } else {
            console.log(`${name} was not found.`);
        }
    }

    const error = (index) => {
        index = Number(index);
        if (list[index] !== 'Blacklisted' && list[index] !== 'Lost') {
            console.log(`${list[index]} was lost due to an error.`);
            list[index] = 'Lost';
            lostCount++;
        }
    }

    const change = (index, newName) => {
        if (index >= 0 && index < list.length) {
            console.log(`${list[index]} changed his username to ${newName}.`);
            list[index] = newName;
        }
    }

    for (const line of input) {
        let [command, token, tokenTwo] = line.split(' ');
        if (command == 'Blacklist') {
            blacklist(token);
        } else if (command == 'Error') {
            error(token);
        } else if (command == 'Change') {
            change(token, tokenTwo);
        } else if (command == 'Report') {
            console.log(`Blacklisted names: ${blacklistCount}`);
            console.log(`Lost names: ${lostCount}`);
            console.log(list.join(' '));
        }
    }
}


//friendListMaintenance([
//    'Mike, John, Eddie',
//    'Blacklist Mike',
//    'Error 0',
//    'Error 1',
//    'Change 2 Mike123',
//    'Report'
//])

friendListMaintenance([
    'Mike, John, Eddie, William',
    'Error 3',
    'Error 3',
    'Change 0 Mike123',
    'Blacklist Eddie',
    'Report'
]
)