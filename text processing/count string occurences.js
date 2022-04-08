function countStrOccurences(string, neededWord) {
    let words = string.split(' ');
    let counter = 0;
    for(let word of words) {
        if(word == neededWord) {
            counter++;
        }
    }
    console.log(counter);
}

countStrOccurences("This is a word and it also is a sentence", "is")