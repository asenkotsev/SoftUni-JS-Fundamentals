function triangle(n) {
    let print = ''
    for (let i = 1; i <= n; i++) {
         print = `${i } `
         console.log(print.repeat(i));
    } 
}

triangle(3)
