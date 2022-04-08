function searchForNumber(arr1, requirements) {
    let count = 0;
    arr = arr1.slice(0, requirements[0]);
    arr.splice(0, requirements[1]);
    let neededNum = requirements[2];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == neededNum) {
            count++;
        }
    }
    console.log(`Number ${neededNum} occurs ${count} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])