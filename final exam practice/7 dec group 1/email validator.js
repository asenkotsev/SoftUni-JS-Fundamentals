function emailValidator(arr) {
    arr.pop();
    let email = arr.shift();

    const Make = (arg) => {
        if (arg == "Upper") {
            email = email.toUpperCase();
            console.log(email);

        } else {
            email = email.toLowerCase();
            console.log(email);

        }
    }

    const getDomain = (count) => {
        console.log(email.substring(email.length - 3, email.length));

    }

    const getUsername = () => {
        let index = email.indexOf('@');
        if (index !== -1) {
            console.log(email.substring(0, index));

        } else {
            console.log(`The email ${email} doesn't contain the @ symbol.`);

        }
    }

    const replace = (char) => {
        while (email.includes(char)) {
            email = email.replace(char, '-');
        }
        console.log(email);

    }

    const encrypt = () => {
        let result = "";
        let chars = email.split('');
        chars.forEach(x => {
            result += `${x.charCodeAt()} `;
        })
        console.log(result.trim());

    }

    for (const line of arr) {
        [command, token] = line.split(' ');
        if (command == "Make") {
            Make(token);
        } else if (command == 'GetDomain') {
            getDomain(token);
        } else if (command == 'GetUsername') {
            getUsername();
        } else if (command == 'Replace') {
            replace(token);
        } else if (command == 'Encrypt') {
            encrypt();
        }
    }
}

emailValidator([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
])