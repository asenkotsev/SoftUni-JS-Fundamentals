function factorialDivision(n1, n2) {
    function factorial(n) {
        let res = 1;

        for (var i = 2; i <= n; i++)
            res = res * i;
        return res;
    }

    let factorial1 = factorial(n1);
    let factorial2 = factorial(n2);
    let result = factorial1 / factorial2;

    console.log(result.toFixed(2));
}

factorialDivision(5, 2)