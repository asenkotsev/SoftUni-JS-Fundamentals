class Storage {
    constructor(capacity, storage, totalCost) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.quantity * product.price;
    }

    getProducts() {
        let output = [];
        for(let i = 0; i < this.storage.length; i++) {
            output.push(JSON.stringify(this.storage[i]));
        }
        return output.join('\n');
    }
}