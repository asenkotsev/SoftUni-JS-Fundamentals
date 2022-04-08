function spiceMustFlow(num) {
    let day = 0;
    let total = 0;
    while (num >= 100) {
        day++;
        total += num;
        num -= 10;
        if (num >= 26) {
            total -= 26;
        }
    }
    console.log(day);
    if (num > 26 && num < 100 && day > 0) {
        total -= 26;
    }
    console.log(total);
}

spiceMustFlow(111)