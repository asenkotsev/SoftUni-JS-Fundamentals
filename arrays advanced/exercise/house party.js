function houseParty(arr) {
    let guestList = [];
    for (let i = 0; i < arr.length; i++) {
        let commandList = arr[i].split(' ');
        let name = commandList[0];
        let command = commandList[2];
        if (command.includes('not')) {
            if (guestList.includes(name)) {
                guestList.splice(guestList.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        }
    }
    console.log(guestList.join("\n"));
}


//houseParty(['Tom is going!','Annie is going!','Tom is going!','Garry is going!','Jerry is going!'])
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])