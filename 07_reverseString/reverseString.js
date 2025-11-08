const reverseString = function(array) {
    return array.split("").reduce((stringReverse, character) => {
        return character.concat(stringReverse);
    }, "")
};

// Do not edit below this line
module.exports = reverseString;
