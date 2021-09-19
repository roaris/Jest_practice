const toFizzBuzz = (num) => {
  if (outofRange(num)) throw new RangeError('引数が不正です。1以上の整数のみ引数に指定可能です。');
  if (num % 15 == 0) return 'FizzBuzz';
  if (num % 3 == 0) return 'Fizz';
  if (num % 5 == 0) return 'Buzz';
  return num;
};

const outofRange = (num) => {
  if (!(typeof num == 'number')) return true;
  if (Math.round(num) != num) return true;
  if (num < 1) return true;
  return false;
};

module.exports = toFizzBuzz;
