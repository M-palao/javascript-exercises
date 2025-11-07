const repeatString = function(word, countRepeat) {
    let repeat = '';
    if (countRepeat < 0){
        return "ERROR";
    }
    for (i = 0; i < countRepeat; i++){
        repeat += word;
    }

    return repeat; 

};

// Do not edit below this line
module.exports = repeatString;
