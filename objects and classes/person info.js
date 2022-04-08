function personInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age,
    };

    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

personInfo("Peter", "Pan", "20")