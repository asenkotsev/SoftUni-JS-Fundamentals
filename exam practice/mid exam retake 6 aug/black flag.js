function blackFlag(input) {
    let plunderDays = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());
    let totalPlunder = 0;

    for (let i = 1; i <= plunderDays; i++) {
        if (i % 3 == 0) {
            totalPlunder += dailyPlunder * 0.5;
        }if (i % 5 == 0) {
            totalPlunder += dailyPlunder;
            totalPlunder -= totalPlunder * 0.3;
        } else {
            totalPlunder += dailyPlunder;
        }
    }
    
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let diff = Math.abs(((expectedPlunder - totalPlunder) / expectedPlunder) * 100);
        let percentage = (100 - diff).toFixed(2);
        console.log(`Collected only ${percentage}% of the plunder.`)
    }
}

blackFlag(['5', '40', '100'])
blackFlag([10, 20, 380])