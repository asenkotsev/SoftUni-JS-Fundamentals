function biscuitsFactory(arr) {
    let biscuitsPerWorker = Number(arr[0]);
    let workers = Number(arr[1]);
    let competingFactory = Number(arr[2]);
    let biscuits = 0;
    for (let i = 1; i <= 30; i++) {
        if (i % 3 == 0) {
            biscuits += Math.floor((biscuitsPerWorker * workers) * 0.75);
        } else {
            biscuits += biscuitsPerWorker * workers;
        }
    }
    console.log(`You have produced ${biscuits} biscuits for the past month.`);
    let diff = Math.abs((((biscuits - competingFactory) / competingFactory) * 100));
    if (biscuits > competingFactory) {
        console.log(`You produce ${diff.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${diff.toFixed(2)} percent less biscuits.`);
    }
}

biscuitsFactory(['78', '8', '16000'])