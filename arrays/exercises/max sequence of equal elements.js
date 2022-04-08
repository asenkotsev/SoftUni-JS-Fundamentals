function maxSequence(arr) {
    arr = arr[0].split(' ');
    let longestSequence = [];
    for (let i = 0; i < arr.length; i++) {
        let currentElement = Number(arr[i]);
        let currentSequence = [currentElement];

        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = Number(arr[j]);

            if (currentElement == nextElement) {
                currentSequence.push(nextElement);
            } else {
                break;
            }
        }
        if (currentSequence.length > longestSequence) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        }
    }
    console.log(...longestSequence);
}

maxSequence(['1 1 1 2 3 1 3 3'])
