function hardWords(arr) {
    let text = arr.shift();
    let words = arr.shift().sort((a, b) => b.length - a.length);
    while (text.includes('_')) {
        let currentWord = words.shift();
        text = text.replace('_'.repeat(currentWord.length), currentWord);
    }
    console.log(text)
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)