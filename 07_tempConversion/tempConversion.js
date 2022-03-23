const ftoc = function(F) {
  return Math.round(((F - 32) * 5 / 9) * 10) / 10;
  // return parseFloat(((F - 32) * 5 / 9).toFixed(1));
};

const ctof = function(C) {
  return Math.round(((C * 9 / 5) + 32) * 10) / 10;
  // return parseFloat(((C * 9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
