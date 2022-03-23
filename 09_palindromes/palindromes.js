const palindromes = function (str) {
    const words = str.replace(/[^a-z]+/gi, '').toLowerCase();
    const reverseWord = words.split('').reverse().join('');

    return (words === reverseWord);
};

// Do not edit below this line
module.exports = palindromes;
