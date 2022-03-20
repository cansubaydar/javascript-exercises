const removeFromArray = function(a, ...arr) {
    return a.filter(value => !arr.includes(value));
    
    // Second solution
    // return a.filter(value => arr.indexOf(value) == -1);
};

// Do not edit below this line
module.exports = removeFromArray;
