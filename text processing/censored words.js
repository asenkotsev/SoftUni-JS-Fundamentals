function censoredWords(text, word) {
    function repeat(word) {
        return '*'.repeat(word.length);
    }
    while (text.includes(word)) {
        text = text.replace(word, repeat(word));
    }
    console.log(text);
}

censoredWords("A small small sentence with some words", "small")