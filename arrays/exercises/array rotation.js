function arrayRotation(arr, rotations) {
    let first = 0;
    for (let i = 0; i < rotations; i++) {
        first = arr[0];
        arr.shift();
        arr.push(first);
    }
    let output = '';
    for (let i = 0; i < arr.length; i++) {
        output += `${arr[i]} `
    }
    console.log(output);
}

arrayRotation([51, 47, 32, 61, 21], 2)