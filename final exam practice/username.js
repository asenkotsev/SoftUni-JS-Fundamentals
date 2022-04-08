function username(arr) {
    let name = arr.shift();
    arr.pop();

    const upperLowerCase = (command) => {
        if (command == 'lower') {
            name = name.toLowerCase();
            console.log(name);
        } else if (command == 'upper') {
            name = name.toUpperCase();
            console.log(name);
        }
    }

    const reverse = (startIndex, endIndex) => {
        if (startIndex >= 0 && startIndex < name.length && endIndex > 0 && endIndex < name.length) {
            let substring = name.substr(startIndex, endIndex + 1).split('').reverse().join('');
            console.log(substring)
        }
    }

    const cut = (substring) => {
        if (name.includes(substring)) {
            name = name.replace(substring, '');
            console.log(name);
        } else {
            console.log(`The word ${name} doesn't contain ${substring}.`)
        }
    }

    const replace = (char) => {
        while(name.includes(char)) {
            name = name.replace(char, '*');
        }
        console.log(name);
    }

    const check = (char) => {
        if(name.includes(char)) {
            console.log('Valid');
        } else {
            console.log(`Your username must contain ${char}.`);
        }
    }

    for (const line of arr) {
        [command, token, tokenTwo] = line.split(' ');
        if (command == 'Case') {
            upperLowerCase(token);
        } else if (command == 'Reverse') {
            reverse(token, tokenTwo);
        } else if (command == 'Cut') {
            cut(token);
        }else if (command == 'Replace') {
            replace(token);
        } else if (command == 'Check') {
            check(token);
        }
    }
}

//username(['Pesho', 'Case lower', 'Cut ES', 'Check @', 'Sign up'])
username(['ThisIsMyString',
    'Reverse 1 4',
    'Replace i',
    'Cut My',
    'Sign up'])