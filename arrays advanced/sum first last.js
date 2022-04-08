function sumFirstLast(arr) {
    let first = Number(arr[0]);
    let last = Number(arr.pop());
    let result = first + last;
    console.log(result);
}

sumFirstLast(['20', '30', '40'])