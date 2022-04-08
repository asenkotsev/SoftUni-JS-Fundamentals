function charity(input) {
    input.pop();
    let string = input.shift();
    let sumEnd = 0;

    const replace = (currentChar, newChar) => {
        while (string.includes(currentChar)) {
            string = string.replace(currentChar, newChar);
        }
        console.log(string);

    }

    const cut = (startIndex, endIndex) => {
        if (startIndex >= 0 && endIndex < string.length) {
            string = string.substring(0, startIndex) + string.substring(endIndex + 1);
            console.log(string);

        } else {
            console.log(`Invalid indexes!`);
        }
    }

    const make = (command) => {
        if (command == 'Upper') {
            string = string.toUpperCase();
        } else {
            string = string.toLowerCase();
        }
        console.log(string);

    }

    const check = (substring) => {
        if (string.includes(substring)) {
            console.log(`Message contains ${substring}`);

        } else {
            console.log(`Message doesn't contain ${substring}`);

        }
    }

    const sum = (startIndex, endIndex) => {

        if (startIndex >= 0 && endIndex < string.length) {
            let substring = string.substr(startIndex, endIndex);
            for(let i = 0; i < substring.length; i++) {
               sumEnd += substring[i].charCodeAt();
            }
            console.log(sumEnd);
            
        } else {
            console.log(`Invalid indexes!`);

        }
    }

    for (const line of input) {
        [command, token, token2] = line.split(' ');
        if (command == 'Replace') {
            replace(token, token2);
        } else if (command == 'Cut') {
            cut(Number(token), Number(token2));
        } else if (command == 'Make') {
            make(token);
        } else if (command == 'Check') {
            check(token);
        } else if (command == 'Sum') {
            sum(Number(token), Number(token2));
        }
    }
}

charity([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
])