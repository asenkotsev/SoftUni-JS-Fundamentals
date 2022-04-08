function magicSum(nums, sum) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == sum) {
                console.log(`${nums[i]} ${nums[j]}`);
            }
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6], 6)