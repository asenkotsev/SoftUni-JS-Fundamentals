function arrayManipulator(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
        let list = commands[i].split(' ');
        let command = list[0];

        if (command == 'add') {
            add(Number(list[1]), Number(list[2]));
        } else if (command == 'addMany') {
            addMany(list, arr);
        } else if (command == 'contains') {
            contains(Number(list[1]));
        } else if (command == 'remove') {
            remove(list[1]);
        } else if (command == 'shift') {
            shift(list[1]);
        } else if (command == 'sumPairs') {
            sumPairs();
        } else if (command == 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
        }
    }

    function add(index, num) {
        arr.splice(index, 0, num);
    }

    function addMany(list, arr) {
        let index = Number(list[1]);
        for (let i = 2; i < list.length; i++) {
            let num = Number(list[i]);
            arr.splice(index, 0, num);
            index++;
        }
    }

    function contains(element) {
        if (arr.includes(element)) {
            console.log(arr.indexOf(element));
        } else {
            console.log(-1);
        }
    }

    function remove(index) {
        arr.splice(index, 1);
    }

    function shift(positions) {
        for (let i = 0; i < positions; i++) {
            first = arr[0];
            arr.shift();
            arr.push(first);
        }
    }

    function sumPairs() {
        pairs = [];
        for (let i = 0; i < arr.length; i++) {
            let el = arr[i] + arr[i + 1]
            if (i < (arr.length - 1)) {
                pairs.push(el)
            } else {
                pairs.push(arr[i])
            }
            arr.shift();
        }
        arr.length = 0;
        arr.push.apply(arr, pairs);
    }
}

//arrayManipulator(
//    [1, 2, 4, 5, 6, 7],
//    ['add 1 8', 'contains 1', 'contains 3', 'addMany 5 9 8 7 6 5', 'print']
//)

arrayManipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
)



