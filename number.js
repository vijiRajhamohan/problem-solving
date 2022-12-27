// 1.Find missing elements in a given Array 1 to 10 //

const arr = [1, 2, 3, 4, 5, 6, 9, 10];
let missingValue = [];
const missing = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  for (let i = min; i <= max; i++) {
    if (arr.indexOf(i) < 0) {
      missingValue.push(i);
    }
  }
  return missingValue;
};

console.log(missing(arr));

// 2. To find even or odd numbers in array //

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr1.filter((item) => {
  // Even numbers in array

  // return item%2 === 0;

  // odd numbers in array
  return item % 2 === 1;
});
console.log(result);

//  3.sum of all numbers in array //

const numbers = [2, 5, 2, 7, 9, 4, 9];
const result1 = (numbers) => {
  return numbers.reduce((item, acc) => {
    return (acc += item);
  });
};
console.log(result1(numbers));

// 4.Factorial

const num = 5;
let fact = 1;

const res = (number) => {
  if (number < 0) {
    return "Negative number is not possible";
  } else {
    for (let i = 1; i <= number; i++) {
      fact *= i;
    }
  }
  return fact;
};
console.log(res(num));

// 5. Prime Numbers //

const result2 = (num) => {
  if (num == 1) {
    console.log(` ${num} is Neither Prime Nor Composite number `);
  } else if (num < 1) {
    console.log(` ${num} is not Possible`);
  }else{
  for (let i = 2; i <= num; i++) {
    if (num % 2 == 0) {
        return ` ${num} is Composite  Number`;
     
    } else {
        return ` ${num} is a  Prime Number`;
    }
  }
}
};
console.log(result2(7));
