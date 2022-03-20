const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 ||  
        typeof num1 !== 'number' ||  
        typeof num2 !== 'number') 
        return 'ERROR';

    let sum = 0;
    let j, k;

    (num1 > num2) ? (j = num2, k = num1) : (j = num1, k = num2);

    for(let i = j; i <= k; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
