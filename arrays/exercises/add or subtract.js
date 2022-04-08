function addOrSubtract(nums) {
    let newSum = 0;
    let previousSum = 0
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i]) % 2 == 0) {
            previousSum += nums[i];
            nums[i] += i;
            newSum += nums[i];
        } else {
            previousSum += nums[i];
            nums[i] -= i;
            newSum += nums[i];
        };
    }
    console.log(nums);
    console.log(previousSum);
    console.log(newSum);
}

addOrSubtract([5, 15, 23, 56, 35])