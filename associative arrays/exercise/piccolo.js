function piccolo(arr) {
    let numbers = [];

    for (const line of arr) {
        [command, number] = line.split(', ');
        if (command == 'IN') {
            if (!numbers.includes(number)) {
                numbers.push(number);
            }
        } else if (command == 'OUT') {
            if (numbers.includes(number)) {
                let index = numbers.indexOf(number);
                numbers.splice(index, 1);
            }
        }
    }

    if (numbers.length > 0) {
        let sorted = numbers.sort();
        console.log(sorted.join('\n'));
    } else {
        console.log('Parking Lot is Empty')
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])