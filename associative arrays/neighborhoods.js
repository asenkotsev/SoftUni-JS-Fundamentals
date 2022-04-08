function neighborhoods(arr) {
    let neighborhoods = new Map();
    arr.shift()
        .split(', ')
        .forEach(x => neighborhoods.set(x, []));
        
    for (const line of arr) {
        let [neighborhoodName, person] = line.split(' - ');
        if (neighborhoods.has(neighborhoodName)) {
            neighborhoods
                .get(neighborhoodName)
                .push(person);
        }
    }

    let temp = Array.from(neighborhoods.entries());
    temp.sort((a, b) => {
        return b[1].length - a[1].length;
    });

    let result = new Map(temp);

    for (const [neighborhoodName, citizens] of result) {
        console.log(`${neighborhoodName}: ${citizens.length}`);
        citizens.forEach(person => console.log(`--${person}`));
    }
}

neighborhoods([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
])