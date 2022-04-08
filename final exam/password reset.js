function passwordReset(input) {
    let password = input.shift();
    let newPassword = '';
    input.pop();

    const takeOdd = () => {
        for (let i = 0; i < password.length; i++) {
            if (i % 2 !== 0) {
                newPassword += password[i];
            }
        }
        password = newPassword;
        console.log(password);

    }

    const cut = (index, length) => {
        let toCut = password.substr(index, length);
        password = password.replace(toCut, '');
        console.log(password);

    }

    const substitute = (substring, substitute) => {
        if(password.includes(substring)) {
            while(password.includes(substring)) {
                password = password.replace(substring, substitute);
            }
            console.log(password);
            
        } else {
            console.log('Nothing to replace!');
            
        }
    }

    for (const line of input) {
        [command, token, token2] = line.split(' ');
        if (command == 'TakeOdd') {
            takeOdd();
        } else if (command == 'Cut') {
            cut(token, token2);
        } else if (command == 'Substitute') {
            substitute(token, token2);
        }
    }

    console.log(`Your password is: ${password}`);
    
}

passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
])