function barcodes(input) {
    input.shift();
    let pattern = /^@#{1,}[A-Z][a-zA-Z0-9]{4,}[A-Z]@#{1,}$/g;
    let numberPattern = /\d+/g;

    for (let line of input) {
        let matches = [...line.matchAll(pattern)][0];

        if (matches) {
            let barcode = matches[0];
            
            if (barcode.match(numberPattern) !== null) {
                let number = barcode.match(numberPattern).join('');
                console.log(`Product group: ${number}`);
                
            } else {
                console.log('Product group: 00');
                
            }

        } else {
            console.log('Invalid barcode');

        }
    }
}

barcodes([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ])

//barcodes([
//    '6',
//    '@###Val1d1teM@###',
//    '@#ValidIteM@#',
//    '##InvaliDiteM##',
//    '@InvalidIteM@',
//    '@#Invalid_IteM@#',
//    '@#ValiditeM@#'
//])