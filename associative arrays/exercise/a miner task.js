function minerTask(arr) {
    let resources = {};
    let quantity = 0;
    let resource = '';
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0) {
            quantity = Number(arr[i]);
        } else {
           resource = arr[i];
            continue;
        }
        
        if (resources.hasOwnProperty(resource)) {
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }

    for(const resource in resources) {
        console.log(`${resource} -> ${resources[resource]}`);
        
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])