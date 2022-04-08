function towns(arr) {
    for (let i = 0; i < arr.length; i++) {
        let info = arr[i].split('|');
        let town = info[0].trim(' ');
        let latitude = Number(info[1]).toFixed(2);
        let longitude = Number(info[2]).toFixed(2);
        let city = {
            town,
            latitude,
            longitude
        }
        console.log(city);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);