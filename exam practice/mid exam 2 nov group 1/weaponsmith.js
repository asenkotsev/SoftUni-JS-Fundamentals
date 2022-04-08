function weaponsmith(arr) {
    arr.pop();
    let weapon = arr.shift().split('|');

    const moveLeft = (index) => {
        let tempIndex = Number(index) - 1;
        if (index >= 0 && index < weapon.length && tempIndex >= 0) {
            let temp = weapon[tempIndex];
            weapon[tempIndex] = weapon[index];
            weapon[index] = temp;
        }
    }

    const moveRight = (index) => {
        let tempIndex = Number(index) + 1;
        if (index >= 0 && index < weapon.length && tempIndex < weapon.length) {
            let temp = weapon[tempIndex];
            weapon[tempIndex] = weapon[index];
            weapon[index] = temp;
        }
    }

    const checkEven = () => {
        let output = '';
        for (let i = 0; i < weapon.length; i += 2) {
            output += `${weapon[i]} `;
        }
        console.log(output.trim());
    }


    const checkOdd = () => {
        let output = '';
        for (let i = 1; i < weapon.length; i += 2) {
            output += `${weapon[i]} `;
        }
        console.log(output.trim());
    }

    for (const line of arr) {
        let tokens = line.split(' ');
        if (tokens.length == 3 && tokens[1].includes('Left')) {
            moveLeft(Number(tokens[2]));
        } else if (tokens.length == 3 && tokens[1].includes('Right')) {
            moveRight(Number(tokens[2]));
        } else if (tokens.length == 2 && tokens[1].includes('Even')) {
            checkEven();
        } else if (tokens.length == 2 && tokens[1].includes('Odd')) {
            checkOdd();
        }
    }
    console.log(`You crafted ${weapon.join('')}!`);
}

weaponsmith([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
]
)

weaponsmith([
    'ri|As|er|hb|ng',
    'Move Left 1',
    'Move Right 2',
    'Move Right 3',
    'Move Left 2',
    'Done'
])