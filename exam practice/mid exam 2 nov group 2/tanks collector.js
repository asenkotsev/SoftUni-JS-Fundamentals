function tanksCollector(input) {
    let tanks = input.shift().split(', ');

    const add = (tankName) => {
        if (tanks.includes(tankName)) {
            console.log('Tank is already bought');
        } else {
            console.log('Tank successfully bought');
            tanks.push(tankName);
        }
    }

    const remove = (tankName) => {
        if (tanks.includes(tankName)) {
            console.log('Tank successfully sold');
            let index = tanks.indexOf(tankName);
            tanks.splice(index, 1)
        } else {
            console.log('Tank not found');
        }
    }

    const removeAt = (index) => {
        index = Number(index);
        let tankName = tanks[index];
        if (index >= 0 && index < tanks.length) {
            if (tanks.includes(tankName)) {
                tanks.splice(index, 1);
                console.log('Tank successfully sold');
            }
        } else {
            console.log('Index out of range');
        }
    }

    const insert = (index, tankName) => {
        index = Number(index);
        if (index >= 0 && index < tanks.length) {
            if (tanks.includes(tankName)) {
                console.log('Tank is already bought');
            } else {
                tanks.splice(index, 0, tankName);
                console.log('Tank successfully bought');
            }
        } else {
            console.log('Index out of range');
        }
    }

    for (const line of input) {
        let [command, token, tokenTwo] = line.split(', ');

        if (command == 'Add') {
            add(token);
        } else if (command == 'Remove') {
            remove(token);
        } else if (command == 'Remove At') {
            removeAt(token);
        } else if (command == 'Insert') {
            insert(token, tokenTwo);
        }
    }
    console.log(tanks.join(', '));
}

//tanksCollector([
//    'T-34-85 Rudy, SU-100Y, STG',
//    '3',
//    'Add, King Tiger(C)',
//    'Insert, 2, IS-2M',
//    'Remove, T-34-85 Rudy'
//])

tanksCollector([
    'T 34, T 34 B, T92, AMX 13 57',
    '4',
    'Add, T 34',
    'Remove, AMX CDC',
    'Insert, 10, M60',
    'Remove At, 1'
]
)