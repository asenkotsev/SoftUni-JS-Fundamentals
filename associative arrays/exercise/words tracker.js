function wordsTracker(arr) {
    let words = {};
    let neededWords = arr.shift().split(' ');

    neededWords.forEach(word=> {
        words[word] = 0;
    })

    arr.forEach(word => {
        if (neededWords.includes(word)) {
            if (words.hasOwnProperty(word)) {
                words[word] += 1;
            }
        }
    })

    Object.entries(words).sort((a,b) => b[1] - a[1]).forEach(entry => {
        console.log(`${entry[0]} - ${entry[1]}`)
    })
}

wordsTracker([
    'this sentence', 'In',
    'this', 'sentence',
    'you', 'have',
    'to', 'count',
    'the', 'occurances',
    'of', 'the',
    'words', 'this',
    'and', 'sentence',
    'because', 'this',
    'is', 'your',
    'task'
]
)