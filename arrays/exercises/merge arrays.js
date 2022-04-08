function mergeArrays(arr1, arr2) {
    let arr3 = [];
    let output = '';
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 == 0) {
            arr3.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            arr3.push(arr1[i] + arr2[i]);
        }
    }
    for (let i = 0; i < arr3.length; i++) {
        if (i == 0) {
            output += `${arr3[i]}`;
        } else {
            output += ` - ${arr3[i]}`;
        }
    }
    console.log(output);
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)