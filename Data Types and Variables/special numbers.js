function specialNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        let n = i.toString();
        for (let j = 1; j <= n.length; j++) {
            sum += Number(n[j - 1]);
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${n} -> True`);
        } else {
            console.log(`${n} -> False`);
        }
        sum = 0;
    }
}

specialNumbers(15)