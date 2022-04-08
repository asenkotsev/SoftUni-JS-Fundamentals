function storage(arr) {
    let storage = {};

    for (let i = 0; i < arr.length; i++) {
        let [product, quantity] = arr[i].split(' ');
        quantity = Number(quantity);

        if (storage.hasOwnProperty(product)) {
            storage[product] += quantity;
        } else {
            storage[product] = quantity;
        }
    }

    for (const product in storage) {
        console.log(`${product} -> ${storage[product]}`);
    }

}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])