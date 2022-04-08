function smallest2Nums(arr) {
    let sortedInAscending = arr.sort((a, b) => { return a - b });
    console.log(sortedInAscending.slice(0, 2).join(' '))
}

smallest2Nums([30, 15, 50, 5])