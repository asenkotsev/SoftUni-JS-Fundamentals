function race(arr) {
    arr.pop();
    let participants = arr.shift().split(', ');
    let participantsObj = {};
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].replace(/[\d*\W*]/g, '');
        let distanceString = arr[i].replace(/[\D*]/g, '');
        let sum = add(distanceString);
        if (participants.includes(name)) {
            if (participantsObj.hasOwnProperty(name)) {
                participantsObj[name] += sum;
            } else {
                participantsObj[name] = sum;
            }
        }

        var sortedParticipants = {};
        Object.keys(participantsObj).sort((a, b) => participantsObj[b] - participantsObj[a]).forEach((key) => {
            sortedParticipants[key] = participantsObj[key];
        });
    }

    function add(string) {
        string = string.split('');
        sum = 0;
        for (let i = 0; i < string.length; i++) {
            sum += Number(string[i]);
        }
        return sum;
    }

    let [first, second, third] = Object.keys(sortedParticipants);
    console.log(`1st place: ${first}`);
    console.log(`2nd place: ${second}`);
    console.log(`3rd place: ${third}`);
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])