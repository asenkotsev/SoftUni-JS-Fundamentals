function cutAndReverse(string) {
    let length = string.length;
    let firstHalf = string.slice(0, length/2);
    let secondHalf = string.slice(length/2, length);
    console.log(firstHalf.split('').reverse().join(''));
    console.log(secondHalf.split('').reverse().join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')