function storage(arr) {
    let storage = new Map();

    for (const line of arr) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (!storage.has(product)) {
            storage.set(product, quantity);
        } else {
            let currQuantity = storage.get(product);
            let newQuantity = currQuantity += quantity;
            storage.set(product, newQuantity);
        }
    }

    for (const [product, quantity] of storage) {
       console.log(`${product} -> ${quantity}`);
    }
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])