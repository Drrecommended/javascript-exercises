const repeatString = function(word, times) {
    let str = ""
    if(times < 0) {
        return 'ERROR'
    }
    for(let i = times; i > 0; i--) {
        str += word
    }
    return str
};

// Do not edit below this line
module.exports = repeatString;
