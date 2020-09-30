const _ = {
    // Method 1: Clamps number within the inclusive lower and upper bounds
    clamp(num, lower, upper) {
      const maxNum = Math.max(num, lower);
      return Math.min(maxNum, upper);
    },

    // Method 2: Checks if n is between start and up to, but not including, end.
    // If end is not specified, it's set to start with start then set to 0.
    // If start is greater than end the params are swapped to support negative ranges.
    inRange(num, start, end) {
        if (end === undefined) {
          end = start;
          start = 0;
        };
        if (start > end) {
          const temp = start;
          start = end;
          end = temp;
        };
        return (num >= start && num < end) ? true : false;
    },
    // Splits string into an array of its words.
    words(str) {
        const arr = str.split(' ');
        return arr;
    },
};




module.exports = _;