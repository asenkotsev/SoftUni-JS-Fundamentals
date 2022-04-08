function sorting(arr) {
    result = [];
    arr.sort((a, b) => a - b);
    while (arr.length > 0) {
        result.push(arr.pop());
        result.push(arr.shift());
    }
    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
