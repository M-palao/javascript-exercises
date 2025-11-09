const removeFromArray = function(array, ...numbers) {
    return array.filter((value) => (!numbers.includes(value)));
};

// Do not edit below this line
module.exports = removeFromArray;
