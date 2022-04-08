function pyramid(base, increment) {
    let height = 0;
    let marble = 0;
    let stone = 0;
    let lapisLazuli = 0;
    let base1 = base;
    while(base >= increment) {
        base -= 2*increment;
    }
    let gold = (Math.trunc(base1/height))
    console.log(`Final pyramid height: ${height}`);
    console.log(gold);
}

pyramid(12,1)