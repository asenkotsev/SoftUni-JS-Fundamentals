function lettersChangeNumbers(text) {
    let strings = text.trim().split(' ');
    strings = strings.filter(item => item);
    result = 0;

    for (let i = 0; i < strings.length; i++) {
        let string = strings[i];
        let num = string.substr(1, string.length - 2);
        if ((/[A-Z]/).test(string[0])) {
            let divideNum = string[0].charCodeAt() - 64;
            result += num / divideNum;
        } else {
            let multiplyNum = string[0].charCodeAt() - 96;
            result += num * multiplyNum;
        }
        if ((/[A-Z]/).test(string[string.length - 1])) {
            let subtractNum = string[string.length - 1].charCodeAt() - 64;
            result -= subtractNum;
        } else {
            let addNum = string[string.length - 1].charCodeAt() - 96;
            result += addNum;
        }
    }
    console.log(result.toFixed(2));

}

lettersChangeNumbers('A12b s17G')
lettersChangeNumbers('P34562Z q2576f   H456z')
lettersChangeNumbers('a1A')