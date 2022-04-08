function firstLastNumbers(arr) {
    let k = arr[0];
    let first = arr.slice(1, (k + 1));
    let last = arr.slice((arr.length - k), arr.length);
    console.log(...first);
    console.log(...last);
}

firstLastNumbers([2, 7, 8, 9])