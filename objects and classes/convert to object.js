function convertToObject(JSONstring) {
    let person = JSON.parse(JSONstring);
    for(let key in person) {
        console.log(`${key}: ${person[key]}`);
    }    
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')