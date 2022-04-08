function primeCheck(num) {
    if (num / num == 1 && num / 1 == num && num % 2 !== 0 && num % 3 !== 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

primeCheck(81)