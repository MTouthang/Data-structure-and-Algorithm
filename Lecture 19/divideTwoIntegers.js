/**
 * Dividing two integers using bit-wise operator, i.e left shift operator
 */

function DivideTwoIntegers(dividend, divisor) {
  var divid = Math.abs(dividend);
  var div = Math.abs(divisor);
  var result = 0;

  while (divid >= div) {
    var shift = 0;
    // left shift
    while (divid >= div << shift) {
      shift += 1;
      result += 1 << (shift - 1);
      console.log(`positive result ${result}`);
      divid -= div << (shift - 1);
    }

    // checking for negative value
    if ((dividend < 0 && divisor >= 0) || (divisor < 0 && dividend >= 0)) {
      result = -result;
      console.log(`negative${result}`);
    }
    return Math.min(2147483647, Math.max(-2147483648, result));
  }
}

const dividend = 48;
const divisor = 12;

const results = DivideTwoIntegers(dividend, divisor);
console.log(results);
