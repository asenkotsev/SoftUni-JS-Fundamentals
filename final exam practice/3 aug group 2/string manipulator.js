function stringManipulator(arr) {
    arr.pop();
    let string = arr.shift();

    const change = (character, replacement) => {
        while (string.includes(character)) {
            string = string.replace(character, replacement);
        }
        console.log(string);

    }

    const includes = (substring) => {
        if (string.includes(substring)) {
            console.log('True');

        } else {
            console.log('False');

        }
    }

    const end = (substring) => {
        if (string.endsWith(substring)) {
            console.log('True');

        } else {
            console.log('False');

        }
    }

    const uppercase = () => {
        string = string.toUpperCase();
        console.log(string);

    }

    const findIndex = (character) => {
        index = string.indexOf(character);
        console.log(index);

    }

    const cut = (startIndex, length) => {
        string = string.substr(startIndex, length);
        console.log(string);

    }



    for (const line of arr) {
        [command, token, token2] = line.split(' ');
        if (command == 'Change') {
            change(token, token2);
        } else if (command == 'Includes') {
            includes(token);
        } else if (command == 'End') {
            end(token);
        } else if (command == 'Uppercase') {
            uppercase();
        } else if (command == 'FindIndex') {
            findIndex(token);
        } else if (command == 'Cut') {
            cut(Number(token), Number(token2));
        }
    }

}

stringManipulator([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
])