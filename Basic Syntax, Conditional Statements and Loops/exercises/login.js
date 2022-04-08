function login(input) {
    let counter = 0;
    let username = input.shift();
    for (let i = 1; i <= 4; i++) {
        let password = input.shift();
        if (password == username.split("").reverse().join("")) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (counter < 3) {
            counter++;
            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${username} blocked!`);
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])