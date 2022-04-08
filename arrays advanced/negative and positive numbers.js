function negativePositiveNums(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            newArr.push(arr[i]);
        } else {
            newArr.unshift(arr[i]);
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);
    }
}

negativePositiveNums([3, -2, 0, -1])