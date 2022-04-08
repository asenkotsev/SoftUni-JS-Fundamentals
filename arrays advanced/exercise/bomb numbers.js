function bombNumbers(arr, params) {
    let [specialNumber, bombPower] = params;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == specialNumber) {
            let startIndex = Math.max(0, i - bombPower);
            let countToEnd = bombPower * 2 + 1;
            arr.splice(startIndex, countToEnd);
            i = 0;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

//bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
//bombNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3])
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
//bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
//bombNumbers([1,2,3,4], [1, 1])