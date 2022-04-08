function messageTranslator(input) {
    input.shift();
    let pattern = /^!([A-Z][a-z]{2,})!:\[([a-zA-z]{8,})]$/g;
    let result = '';

    for (let line of input) {
        let matches = [...line.matchAll(pattern)][0];
        
        if (matches) {
            let command = matches[1];
            let message = matches[2];

            for (let i = 0; i < message.length; i++) {
                result += ` ${message[i].charCodeAt()}`
            }
            console.log(`${command}:${result}`);

        } else {
            console.log('The message is invalid');

        }

    }
}

messageTranslator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]'])