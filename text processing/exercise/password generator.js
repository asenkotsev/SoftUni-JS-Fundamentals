function passwordGenerator(arr) {
    let password = arr[0].concat(arr[1]);
    let replacement = arr[2].toUpperCase();
    let counter = 0;
    for (let i = 0; i < password.length; i++) {
        if (password[i].charCodeAt() == 97 || password[i].charCodeAt() == 101 || password[i].charCodeAt() == 105 || password[i].charCodeAt() == 111 || password[i].charCodeAt() == 117) {
            if (counter < replacement.length) {
                password = password.replace(password[i], replacement[counter]);
                counter++;
            } else {
                counter = 0;
                password = password.replace(password[i], replacement[counter]);
                counter++;
            }
        }
    }
    password = password.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
])