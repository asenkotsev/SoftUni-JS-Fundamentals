function printAndSum(n1, n2) {
    let print = '';
    let sum = 0;
    for(let i=n1; i<=n2; i++) {
        print += `${i} `;
        sum += i;
    }
    console.log(print);
    console.log(`Sum: ${sum}`);
}

printAndSum(5,10)