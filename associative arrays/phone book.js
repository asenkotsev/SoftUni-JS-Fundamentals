function phoneBook(arr) {
  let phonebook = {};

  for (let i = 0; i < arr.length; i++) {
    let [name, number] = arr[i].split(' ');
    phonebook[name] = number;
  }

  for (const name in phonebook) {
    console.log(`${name} -> ${phonebook[name]}`)
  }

}

phoneBook([
  'Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344'
])