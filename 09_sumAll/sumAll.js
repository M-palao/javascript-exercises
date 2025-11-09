const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y) || y < 0 || x < 0) { return ('ERROR');};

    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
