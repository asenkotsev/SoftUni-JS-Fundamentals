function nationalCourt(arr) {
    let totalPeopleCount = Number(arr.pop());
    let worker1 = Number(arr[0]);
    let worker2 = Number(arr[1]);
    let worker3 = Number(arr[2]);
    let hours = 1;
    while (totalPeopleCount > 0) {
        if (hours % 4 == 0 && hours !== 0) {
            hours++;
            continue;
        } else {
            totalPeopleCount -= (worker1 + worker2 + worker3);
        }
        hours++;
    }
    console.log(`Time needed: ${hours - 1}h.`)
}

nationalCourt(['5', '6', '4', '20'])
nationalCourt([1, 2, 3, 45])
nationalCourt([3, 2, 5, 40])