function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let num = Number(command[1]);
        if (command[0] == 'Add') {
            wagons.push(num);
        } else {
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + Number(command[0]) <= maxCapacity) {
                    wagons[j] += Number(command[0]);
                    command.shift();
                }
            }
        }

    }
    console.log(...wagons);
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])