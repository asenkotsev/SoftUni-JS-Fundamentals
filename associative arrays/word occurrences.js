function wordOccurences(arr) {
    let occurences = new Map();
    for(let i = 0; i < arr.length; i++) {
        occurences.get(arr[i]);
    }
    let sorted = Array.from(occurences).sort((a,b) => b[1] - a[1]);
    console.log(occurences);
    
}

wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])