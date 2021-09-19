const app = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(toFizzBuzz(i));
  }
}

const toFizzBuzz = (num) => {
  if (num % 15 == 0) return 'FizzBuzz';
  if (num % 3 == 0) return 'Fizz';
  if (num % 5 == 0) return 'Buzz';
  return num;
}

module.exports = app;
