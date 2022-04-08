function shoppingList(arr) {
    let list = arr.shift().split('!');

    const urgent = (item) => {
        if (!list.includes(item)) {
            list.unshift(item);
        }
    }

    const unnecessary = (item) => {
        if (list.includes(item)) {
            let index = list.indexOf(item);
            list.splice(index, 1);
        }
    }

    const correct = (oldItem, newItem) => {
        if (list.includes(oldItem)) {
            let index = list.indexOf(oldItem);
            list[index] = newItem;
        }
    }

    const rearrange = (item) => {
        if (list.includes(item)) {
            list.push(item);
            let index = list.indexOf(item);
            list.splice(index, 1);
        }
    }
    
    for (const line of arr) {
        [command, token, tokenTwo] = line.split(' ');
        if(command == 'Urgent') {
            urgent(token);
        } else if (command == 'Unnecessary') {
            unnecessary(token);
        } else if (command == 'Correct') {
            correct(token, tokenTwo);
        } else if (command == 'Rearrange') {
            rearrange(token);
        }
    }
    console.log(list.join(', '))
}

shoppingList([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
])