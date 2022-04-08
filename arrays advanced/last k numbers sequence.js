function lastNumbersSequence(n, k) {
    let arr = [];
    arr[0] = 1;
    for (let i = 0; i < n; i++) {
        let current = arr.slice(k * -1).reduce((a, b) => a + b);
        arr[i] = current;
    }
    console.log(...arr);
}


lastNumbersSequence(6, 3)