function palindromeInts(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let stringNum = num.toString();
        let reverseNum = stringNum.split('').reverse().join('');
        if (num === Number(reverseNum)) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindromeInts([123, 323, 421, 121])