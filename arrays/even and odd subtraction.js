function evenAndOddSubtraction(arr) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0) {
            evenSum += Number(arr[i]);
        } else {
            oddSum += Number(arr[i]);
        }
    }
    console.log(evenSum - oddSum);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6])