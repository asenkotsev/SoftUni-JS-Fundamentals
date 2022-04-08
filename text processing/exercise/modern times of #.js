function modernTimes(input) {
    let words = input.split(' ');
    let output = [];

    const hasOnlyLetters = (word) => {
        word = word.toLowerCase();
        for (let i = 0; i < word.length; i++) {
            if (word.charCodeAt(i) < 97 || word.charCodeAt(i) > 122) {
                return false;
            }
        }
            return true;
        }

        const isValid = (word) => {
            if (word.startsWith('#') && word.length > 1 && hasOnlyLetters(word.substring(1))) {
                return true;
        }
        return false;
    }
        words.forEach(word => {
            if (isValid(word)) {
                output.push(word.substr(1, word.length));
            }
        })
        console.log(output.join('\n'))
    }

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')