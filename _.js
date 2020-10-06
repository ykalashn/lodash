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

    // Method 6: Creates an object composed of the inverted keys and values of `object`.
    // If `object` contains duplicate values, subsequent values overwrite property assignments of previous values.
    invert(obj) {
      let invertedObj = {};
      for (let key in obj) {
        let originalValue = obj[key];
        invertedObj[originalValue] = key;
      };
      return invertedObj;
    },

    // Method 7:  Returns the key of the matched element, else undefined.
    findKey(obj, func) {
      for (let key in obj){
        if (func(obj[key])) {
          return key;
        }
      }
      return undefined;
    },

    // Method 8: Creates a slice of array with n elements dropped from the beginning.
    drop(arr, n) {
      const newArr = arr;
      if (n === undefined) {
        newArr.shift();
        return newArr;
      };
      while (n > 0) {
        newArr.shift();
        n--;
      };
      return newArr;
      },

      // Method 9: Creates a slice of array excluding elements dropped from the beginning.
      // Elements are dropped until predicate returns falsey.
      // The predicate is invoked with three arguments: (value, index, array).
      dropWhile(array, predicate) {
        const cb = (element, index) => {
          return !predicate(element, index, array);
        };
        let dropNumber = array.findIndex(cb);
        let newArr = this.drop(array, dropNumber);
        return newArr;
      },
};




module.exports = _;