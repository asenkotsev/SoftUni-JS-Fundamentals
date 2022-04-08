function employees(arr) {
    for (let i = 0; i < arr.length; i++) {
        let output = '';
        let name = arr[i];
        let personalNumber = name.length;
        let employee = {
            Name: name,
            'Personal Number': personalNumber,
        }
        
        let index = 1;
        for (let key in employee) {
            if (index == 1) {
                output += `${key}: ${employee[key]} -- `;
                index = 0;
            } else {
                output += `${key}: ${employee[key]}`
                index = 1;
            }

        }
        console.log(output);
    }
}


employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])