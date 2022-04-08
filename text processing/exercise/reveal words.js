function revealWords(textWords, text) {
    let words = textWords.split(', ').sort((a, b) => b.length - a.length);
    while(text.includes('*')) {
        let currentWord = words.shift();
        text = text.replace('*'.repeat(currentWord.length), currentWord);
    }
    console.log(text)
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)