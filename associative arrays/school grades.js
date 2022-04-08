function schoolGrades(arr) {
    let grades = new Map();

    for (let line of arr) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let tempGrades = tokens.splice(1, tokens.length).map(Number);

        if (!grades.has(name)) {
            grades.set(name, []);
            grades.set(name, grades.get(name).concat(tempGrades));
        } else {
            grades.set(name, grades.get(name).concat(tempGrades));
        }
    }
    function average(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }
        let aAverage = aSum / a[1].length;
        let bAverage = bSum / b[1].length;
        return aAverage - bAverage;
    }
    let sorted = Array.from(grades).sort((a, b) => average(a, b));


    for (const [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
    }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])