function rounding(num, float) {
    if(float > 15) {
        float = 15
    }
    console.log(parseFloat(num.toFixed(float)));
}

rounding(10.531,3)