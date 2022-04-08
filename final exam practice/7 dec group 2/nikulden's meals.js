function meals(input) {
    input.pop();
    let people = {};
    let unlikeCount = 0;

    for (const line of input) {
        [command, name, meal] = line.split('-');
        if (command == 'Like') {
            
            if (!people.hasOwnProperty(name)) {
                people[name] = [];
            }

            if (!people[name].includes(meal)) {
                people[name].push(meal);
            }

        } else if (command == 'Unlike') {
           
            if (!people.hasOwnProperty(name)) {
                console.log(`${name} is not at the party.`);

            } else {
                let likedMeals = people[name];
               
                if (likedMeals.includes(meal)) {
                    console.log(`${name} doesn't like the ${meal}.`);

                    let indexOfMeal = likedMeals.indexOf(meal);
                    likedMeals.splice(indexOfMeal, 1);
                    unlikeCount++;
                
                } else {
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                    
                }
            }
        }
    }
    const sortUsers = (userA, userB) => {
        let usernameA = userA[0];
        let userMealsA = userA[1];
        let mealCountA = userMealsA.length;

        let usernameB = userB[0];
        let userMealsB = userB[1];
        let mealCountB = userMealsB.length;

        if (mealCountB == mealCountA) {
            return usernameA.localeCompare(usernameB);
        } else {
            return mealCountB - mealCountA;
        }
    }
    let sorted = Object.entries(people).sort(sortUsers);

    
    for(let [name, meals] of sorted) {
        console.log(`${name}: ${meals.join(', ')}`);
        
    }

    console.log(`Unliked meals: ${unlikeCount}`);
   
}

meals([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Stop'
])

meals([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
]
)