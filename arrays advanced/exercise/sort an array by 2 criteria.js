function sortArrayBy2Criteria(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

sortArrayBy2Criteria(["alpha", "beta", "gamma",])