function stringSubstring(string, text) {
    string = string.toLowerCase();
    text = text.toLowerCase();
    let words = text.split(' ');
    if (words.includes(string)) {
        console.log(string);
    } else {
        console.log(`${string} not found!`)
    }
}

stringSubstring('javascript',
    'JavaScript is the best programming language')