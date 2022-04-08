function addAndSubtract(n1, n2, n3) {
    let sumElements = (a, b) => a + b;
    let subtract = (sum, c) => sum - c;
    let sum = sumElements(n1, n2);
    console.log(subtract(sum, n3));
}

addAndSubtract(23, 6, 10)