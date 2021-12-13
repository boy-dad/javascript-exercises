const palindromes = function (x) {
    x = x.replace(/\W/g, '').toLowerCase();
    xSplitReversed = x.split('').reverse();
    xReversed = xSplitReversed.join('');
    return x === xReversed;
};

// Do not edit below this line
module.exports = palindromes;
