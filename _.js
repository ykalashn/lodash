const _ = {
    // Method 1: Clamps number within the inclusive lower and upper bounds
    clamp(num, lower, upper) {
      const maxNum = Math.max(num, lower);
      return Math.min(maxNum, upper);
    }, 
};




module.exports = _;