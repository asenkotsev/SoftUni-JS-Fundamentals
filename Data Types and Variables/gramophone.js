function gramophone(bandName, albumName, songName) {
    let duration = (bandName.length * albumName.length)*songName.length/2;
    let rotations = Math.ceil(duration/2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')