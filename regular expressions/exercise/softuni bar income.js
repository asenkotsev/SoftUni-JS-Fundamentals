function barIncome(arr) {
    arr.pop();
    let income = 0;
    let pattern = /^%(?<name>[A-Z][a-z]+)%.*?\<(?<product>\w+)\>.*?\|(?<quantity>\d+)\|.*?(?<price>\d*\.?\d+)\$$/;
    for (const registry of arr) {
        let match = pattern.exec(registry);
        if (match) {
            let totalPrice = Number(match.groups.price) * Number(match.groups.quantity);
            console.log(`${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(2)}`)
            income += totalPrice;
        }
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}

//barIncome([
//   'valid%George%valid<Croissant>valid|2|valid10.3$',
//   '%Peter%<Gum>|1|1.3$',
//   '%Maria%<Cola>|1|2.4$',
//   'end of shift'
// ])

barIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid11$',
    'end of shift'
  ])