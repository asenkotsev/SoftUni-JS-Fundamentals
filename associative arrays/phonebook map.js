function phoneBook(arr) {
    let phonebook = new Map();

    for (let i = 0; i < arr.length; i++) {
        let = [name, number] = arr[i].split(' ');
        phonebook.set(name, number);   
    }

    for (let [name, number] of phonebook) {
        console.log(`${name} -> ${number}`);
    }
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])