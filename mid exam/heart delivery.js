function heartDelivery(arr) {
    let neighborhood = arr.shift().split('@').map(Number);
    let position = 0;
    let jump = 0;
    arr.pop();
    for (let i = 0; i < arr.length; i++) {
        let list = arr[i].split(' ');
        if (list[0] == 'Jump') {
            jump = Number(list[1]);
            let temp = position;
            if ((temp += jump) >= neighborhood.length && jump > 0) {
                position = 0;
                temp = 0;
            } else {
                position += jump;
            }
            if (neighborhood[position] == 0) {
                console.log(`Place ${position} already had Valentine's day.`);
            }
            if (neighborhood[position] == 2) {
                neighborhood[position] -= 2;
                console.log(`Place ${position} has Valentine's day.`);
            } else if (neighborhood[position] > 0) {
                neighborhood[position] -= 2;
            }
        }
    }
    console.log(`Cupid's last position was ${position}.`);
    neighborhood = neighborhood.filter(item => item !== 0);
    let remainingPlaces = neighborhood.length;
    if (remainingPlaces == 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${remainingPlaces} places.`);
    }
}

heartDelivery(['10@10@10@2', 'Jump 0', 'Jump 2', 'Love!'])
//heartDelivery([
//    '2@4@2', 'Jump 2',
//    'Jump 2', 'Jump 8',
//    'Jump 3', 'Jump 1',
//    'Love!'
//])