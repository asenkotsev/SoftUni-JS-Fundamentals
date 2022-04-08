function heroes(input) {
    let heroes = new Map();
    input.pop;
    let numberOfHeroes = Number(input.shift());

    for (let i = 0; i < numberOfHeroes; i++) {
        let heroInfo = input.shift().split(' ');
        heroes.set(heroInfo[0], [Number(heroInfo[1]), Number(heroInfo[2])]);
    }

    for (const line of input) {
        [command, heroName, amount, token] = line.split(' - ');
        if (command == 'Heal') {
            if (heroes.has(heroName)) {
                if (heroes.get(heroName)[0] + Number(amount) <= 100) {
                    heroes.get(heroName)[0] += Number(amount);
                    console.log(`${heroName} healed for ${amount} HP!`);
                } else {
                    let healed = 100 - heroes.get(heroName)[0];
                    heroes.get(heroName)[0] = 100;
                    console.log(`${heroName} healed for ${healed} HP!`);
                }
            }
        } else if (command == 'Recharge') {
            if (heroes.has(heroName)) {
                if (heroes.get(heroName)[1] + Number(amount) <= 200) {
                    heroes.get(heroName)[1] += Number(amount);
                    console.log(`${heroName} recharged for ${amount} MP!`);
                } else {
                    let recharged = 200 - heroes.get(heroName)[1];
                    heroes.get(heroName)[1] = 200;
                    console.log(`${heroName} recharged for ${recharged} MP!`);
                }
            }
        } else if (command == 'TakeDamage') {
            if (heroes.has(heroName)) {
                if (heroes.get(heroName)[0] - Number(amount) > 0) {
                    heroes.get(heroName)[0] -= Number(amount);
                    console.log(`${heroName} was hit for ${amount} HP by ${token} and now has ${heroes.get(heroName)[0]} HP left!`);

                } else {
                    heroes.delete(heroName);
                    console.log(`${heroName} has been killed by ${token}!`);

                }
            }
        } else if (command == 'CastSpell') {
            if (heroes.has(heroName)) {
                if (heroes.get(heroName)[1] - Number(amount) >= 0) {
                    heroes.get(heroName)[1] -= Number(amount);
                    console.log(`${heroName} has successfully cast ${token} and now has ${heroes.get(heroName)[1]} MP!`);

                } else {
                    console.log(`${heroName} does not have enough MP to cast ${token}!`);

                }
            }
        }
    }

    const sortHeroes = (heroA, heroB) => {
        let heroNameA = heroA[0];
        let heroHealthA = heroA[1][0];

        let heroNameB = heroB[0];
        let heroHealthB = heroB[1][0];

        if (heroHealthA == heroHealthB) {
            return heroNameA.localeCompare(heroNameB);
        } else {
            return heroHealthB - heroHealthA;
        }
    }

    let sorted = Array.from(heroes.entries());
    sorted.sort(sortHeroes);
    let result = new Map(sorted);

    for (const [name, stats] of sorted) {
        console.log(name);
        console.log(`  HP: ${stats[0]}`);
        console.log(`  MP: ${stats[1]}`);
    }
}

heroes([
    '4',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Pesho 99 50',
    'Andro 1 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])

//heroes([
//    '4',
//    'Adela 90 150',
//    'SirMullich 70 40',
//    'Ivor 1 111',
//    'Tyris 94 61',
//    'Heal - SirMullich - 50',
//    'Recharge - Adela - 100',
//    'CastSpell - Tyris - 1000 - Fireball',
//    'TakeDamage - Tyris - 99 - Fireball',
//    'TakeDamage - Ivor - 3 - Mosquito',
//    'End'
//  ])