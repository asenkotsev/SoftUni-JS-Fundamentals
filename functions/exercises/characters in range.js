function charsInRange(char1, char2) {
    let output = '';
    let start = char1.charCodeAt();
    let end = char2.charCodeAt();
    if (start > end) {
        start = char2.charCodeAt();
        end = char1.charCodeAt();
    }
    for (let i = start + 1; i < end; i++) {
        output += (`${String.fromCharCode(i)} `);
    }
    console.log(output);
}

charsInRange('C', '#')