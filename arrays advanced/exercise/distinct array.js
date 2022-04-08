function distinctArray(arr) {
    let distinctArray = arr.filter((item, pos) => arr.indexOf(item) == pos);
    console.log(...distinctArray);
}

//distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])