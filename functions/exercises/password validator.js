function passwordValidator(pass) {
    let isValid = true;
    let isSpecialChar = false;
    let digitCounter = 0;

    if (!(pass.length >= 6 && pass.length <= 10)) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    for (let i = 0; i < pass.length; i++) {
        let n = pass[i].charCodeAt(0);
        if ((n >= 65 && n <= 91) || (n >= 97 && n < 123) || (n >= 48 && n < 58)) {
            if (n >= 48 && n < 58) {
                digitCounter++;
            }
        } else {
            isValid = false;
            isSpecialChar = true;
        }
    }
    if (isSpecialChar) {
        console.log('Password must consist only of letters and digits');
    }

    if (!(digitCounter >= 2)) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }

    if (isValid) {
        console.log('Password is valid');
    }
}

passwordValidator('mypass123')