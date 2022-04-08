function oddSum(n) {
    let sum = 0;
    for (let i = 1; i <= 2 * n; i++) {
        if (i % 2 !== 0) {
            sum += i;
            console.log(i);
        }
    }
    console.log(`Sum: ${sum}`);
}

oddSum(5)