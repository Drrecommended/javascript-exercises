const removeFromArray = function(...args) {
    const arr = args[0]
    return arr.filter(num => !args.includes(num))
};



// Do not edit below this line
module.exports = removeFromArray;
