const repeatString = function(str, num) {
    if(num < 0) {
        return 'ERROR';
    }

    let string = '';
    for (let i = 1; i <= num; i++) {
        string += str;
    }
    return string;

    // Using the repeat() method
    // return num < 0 ? 'ERROR' : str.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
