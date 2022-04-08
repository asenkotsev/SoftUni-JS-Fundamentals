function furniture(products) {
    let pattern = />>(?<product>[A-Z-a-z]+)<<(?<price>\d*\.?\d+)!(?<quantity>\d+)/;
    let totalPrice = 0;
    let productList = [];
    for (const product of products) {
        let match = pattern.exec(product);
        if (match) {
            productList.push(match.groups.product);
            totalPrice += Number(match.groups.price) * Number(match.groups.quantity);
        }
    }
    if (productList.length > 0) {
        console.log('Bought furniture: ' + '\n' + productList.join('\n') + '\n' + 'Total money spend: ' + totalPrice.toFixed(2));
    } else {
        console.log('Bought furniture: ' + productList.join('\n') + '\n' + 'Total money spend: ' + totalPrice.toFixed(2));
    }
}

furniture(['>Invalid<<!5', 'Purchase'])