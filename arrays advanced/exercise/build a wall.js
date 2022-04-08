function buildWall(arr) {
    let result = [];
    let yards = 0;
    while (arr.length > 0) {
        arr = arr.filter(item => item !== 30);
        arr = arr.map(a => a + 1);
        if (arr.length !== 0) {
            result.push(arr.length * 195);
            yards += arr.length * 195;

        }
    }
    let sum = yards * 1900;
    console.log(result.join(', '));
    console.log(`${sum} pesos`);
}

buildWall([30])