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

    // Method 3: Splits string into an array of its words.
    words(str) {
      const arr = str.split(' ');
      return arr;
    },

    // Method 4: Pads string on the left and right sides if it's shorter than length.
    // Padding characters are truncated if they can't be evenly divided by length.
    pad(str, len) {
      const strLen = str.length;
      const space = ' ';
      if (strLen > len) {
        return str;
      } else if ((len - strLen) % 2 === 0) {
        str = space.repeat((len - strLen) / 2) + str + space.repeat((len - strLen) / 2);
      } else {
        str = space.repeat((len - 1 - strLen) / 2) + str + space.repeat((len + 1 - strLen) / 2);
      }
      return str;
    },

    // Method 5: Checks if path is a direct property of object.
    has(obj, key) {
      if (obj[key] !== undefined) {
        return true
      } else {
        return false
      };
    },
};




module.exports = _;