function replaceChars(string) {
    let letters = string.split('');
    let output = '';
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] !== letters[i + 1]) {
            output += letters[i];
        }
    }
    console.log(output);
    
}

replaceChars('aaaaabbbbbcdddeeeedssaa')
replaceChars('qqqwerqwecccwd')
replaceChars('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')