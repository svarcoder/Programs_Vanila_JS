// 1. Sum of Numbers from 1 to N
const sumToN = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  console.log(sum);
};
// sumToN(5);

// 2. Factorial of a Number
const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  console.log(result);
};
// factorial(5);

// 3. Check if a Number is Prime
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  console.log(true);
};
// isPrime(5);

// 4. Find the Largest of Three Numbers
const largestOfThree = (a, b, c) => {
  console.log(Math.max(a, b, c));
};
// largestOfThree(23, 59, 10);

// 5. Reverse a String
const reverseString = (str) => {
  console.log(str.split("").reverse().join(""));
};
// reverseString("gnirts");

//6. Check for Palindrome String
const isPalindrome = (str) => {
  console.log(str === str.split("").reverse().join(""));
};
// isPalindrome("madam");

//7. Generate Fibonacci Sequence up to N Terms
const fibonacci = (n) => {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) sequence.push(sequence[i - 1] + sequence[i - 2]);
  console.log(sequence);
};
// fibonacci(20);

//8. Count Vowels in a String
const countVowels = (str) => {
  console.log(str.match(/[aeiou]/gi)?.length || 0);
};
// countVowels("jsjsutisosduvbdh");

//9. Sum of Digits of a Number
const sumOfDigits = (num) => {
  console.log(
    String(num)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0)
  );
};
// sumOfDigits(6428);

//10. Find the Largest Element in an Array
const largestInArray = (arr) => {
  console.log(Math.max(...arr));
};
// largestInArray([5, 7, 20, 40, 4, 5]);

//11. Check if a Number is Even or Odd
const isEven = (num) => {
  console.log(num % 2 === 0);
};
// isEven(6)

// 12. Remove Duplicates from an Array
const removeDuplicates = (arr) => {
  console.log([...new Set(arr)]);
};
// removeDuplicates([5, 7, 4, 5, 4, 5]);

//13. Calculate the Average of an Array
const average = (arr) => {
  console.log(arr.reduce((a, b) => (a + b) / arr.length));
};
// average([2, 2]);

//14. Count Occurrences of a Character in a String
const countOccurrences = (str, char) => {
  console.log(str.split(char).length - 1);
};
// countOccurrences("tusskdkk", "s");

//15. Check if an Array is Sorted
const isSorted = (arr) => {
  for (let i = 1; i < arr.length; i++)
    if (arr[i] < arr[i - 1]) return console.log(false);
  console.log(true);
};
// isSorted([2, 3, 4, 5]);

//16. Calculate Power of a Number
const power = (base, exponent) => {
  console.log(base ** exponent);
};

//17. Find GCD of Two Numbers
const gcd = (a, b) => {
  while (b) [a, b] = [b, a % b];
  console.log(a);
};

//18. Find the LCM of Two Numbers
const lcm = (a, b) => {
  console.log((a * b) / gcd(a, b));
};

//19. Print Prime Numbers up to N
const primesUpToN = (n) => {
  let primes = [];
  for (let i = 2; i <= n; i++) if (isPrime(i)) primes.push(i);
  console.log(primes);
};

//20. Print Pattern with Loops
const printPattern = (n) => {
  let pattern = "";
  for (let i = 1; i <= n; i++) pattern += "*".repeat(i) + "\n";

  console.log(pattern);
};
// printPattern(10);

//21. Check if a Number is an Armstrong Number
const isArmstrong = (num) => {
  console.log(
    num ===
      String(num)
        .split("")
        .reduce((sum, digit) => sum + digit ** 3, 0)
  );
};

//22. Find All Factors of a Number
const factors = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) if (num % i === 0) result.push(i);
  console.log(result);
};

//23. Convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => {
  console.log((celsius * 9) / 5 + 32);
};

//24. Check if Two Strings are Anagrams
const areAnagrams = (str1, str2) => {
  console.log(
    str1.split("").sort().join("") === str2.split("").sort().join("")
  );
};

//25. Find the Second Largest Element in an Array
const secondLargest = (arr) => {
  let max = Math.max(...arr);
  arr = arr.filter((num) => num !== max);
  console.log(Math.max(...arr));
};

//26. Find Missing Number in a Sequence
const findMissing = (arr) => {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  console.log(sum - arr.reduce((a, b) => a + b, 0));
};

//27. Calculate the Area of a Circle
const areaOfCircle = (radius) => {
  console.log(Math.PI * radius * radius);
};

//28. Check if a Year is a Leap Year
const isLeapYear = (year) => {
  console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
};

//29. Convert Binary to Decimal
const binaryToDecimal = (binary) => {
  console.log(parseInt(binary, 2));
};

//30. Convert Decimal to Binary
const decimalToBinary = (decimal) => {
  console.log(decimal.toString(2));
};

//31. Find the Median of an Array
const median = (arr) => {
  arr.sort((a, b) => a - b);
  let mid = Math.floor(arr.length / 2);
  console.log(arr.length % 2 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2);
};

//32. Rotate an Array
const rotateArray = (arr, times) => {
  console.log(arr.slice(times).concat(arr.slice(0, times)));
};

//33. Remove All Vowels from a String
const removeVowels = (str) => {
  console.log(str.replace(/[aeiou]/gi, ""));
};

//34. Count the Frequency of Each Element in an Array
const frequency = (arr) => {
  let freq = {};
  arr.forEach((item) => (freq[item] = (freq[item] || 0) + 1));
  console.log(freq);
};

//35. Calculate Compound Interest
const compoundInterest = (principal, rate, time) => {
  console.log(principal * (1 + rate / 100) ** time);
};

//36. Generate Random Integer Between Two Numbers
const randomInt = (min, max) => {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
};

//37. Find Intersection of Two Arrays
const arrayIntersection = (arr1, arr2) => {
  console.log(arr1.filter((value) => arr2.includes(value)));
};

//38. Flatten a Nested Array
const flattenArray = (arr) => {
  console.log(arr.flat(Infinity));
};

//39. Find the Most Frequent Element in an Array
const mostFrequent = (arr) => {
  let freq = frequency(arr);
  console.log(Object.keys(freq).reduce((a, b) => (freq[a] > freq[b] ? a : b)));
};

//40. Capitalize Each Word in a String
const capitalizeWords = (str) => {
  console.log(str.replace(/\b\w/g, (char) => char.toUpperCase()));
};

// 1. Print a Square of Stars
const squarePattern = (n = 5) => {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      line += "*  ";
    }
    console.log(line);
  }
};
// squarePattern();

// 2. Print a Right-Angled Triangle of Stars
const rightTriangle = (n = 5) => {
  for (let i = 1; i <= n; i++) console.log("* ".repeat(i));
};
// rightTriangle();

// 3. Print an Inverted Right-Angled Triangle of Stars
const invertedRightTriangle = (n = 5) => {
  for (let i = n; i >= 1; i--) console.log("* ".repeat(i));
};
// invertedRightTriangle();

// 4. Print a Pyramid of Stars
const pyramid = (n = 5) => {
  for (let i = 1; i <= n; i++) console.log(" ".repeat(n - i) + "* ".repeat(i));
};
// pyramid();

// 5. Print an Inverted Pyramid of Stars
const invertedPyramid = (n = 5) => {
  for (let i = n; i >= 1; i--) console.log(" ".repeat(n - i) + "* ".repeat(i));
};
// invertedPyramid();

// 6. Diamond Pattern
const diamond = (n = 5) => {
  pyramid(n);
  for (let i = n - 1; i >= 1; i--)
    console.log(" ".repeat(n - i) + "* ".repeat(i));
};
// diamond();

// 7. Hollow Square Pattern
const hollowSquare = (n = 5) => {
  console.log("* ".repeat(n));
  for (let i = 1; i < n - 1; i++) console.log("*" + "  ".repeat(n - 2) + " *");
  console.log("* ".repeat(n));
};
// hollowSquare();

// 8. Hollow Right-Angled Triangle
const hollowRightTriangle = (n = 5) => {
  for (let i = 1; i <= n; i++) {
    if (i === 1 || i === n) console.log("* ".repeat(i));
    else console.log("*" + "  ".repeat(i - 2) + " *");
  }
};
// hollowRightTriangle();

// 9. Floyd's Triangle Pattern
const floydsTriangle = (n = 5) => {
  let num = 1;
  for (let i = 1; i <= n; i++)
    console.log(Array.from({ length: i }, () => num++).join(" "));
};
// floydsTriangle();

// 10. Pascal’s Triangle
const pascalsTriangle = (n = 5) => {
  for (let i = 0; i < n; i++) {
    let row = [1];
    for (let j = 1; j <= i; j++) row.push((row[j - 1] * (i - j + 1)) / j);
    console.log(" ".repeat(n - i) + row.join(" "));
  }
};
// pascalsTriangle();

// 11. Numeric Triangle Pattern
const numericTriangle = (n = 5) => {
  for (let i = 1; i <= n; i++)
    console.log(Array.from({ length: i }, (_, j) => j + 1).join(" "));
};
// numericTriangle();

// 12. Reverse Numeric Triangle
const reverseNumericTriangle = (n = 5) => {
  for (let i = n; i >= 1; i--)
    console.log(Array.from({ length: i }, (_, j) => j + 1).join(" "));
};
// reverseNumericTriangle();

// 13. Numeric Pyramid
const numericPyramid = (n = 5) => {
  for (let i = 1; i <= n; i++) {
    console.log(
      " ".repeat(n - i) + Array.from({ length: i }, (_, j) => j + 1).join(" ")
    );
  }
};
// numericPyramid();

// 14. Binary Triangle
const binaryTriangle = (n = 5) => {
  for (let i = 1; i <= n; i++) {
    console.log(
      Array.from({ length: i }, (_, j) => (j % 2 === 0 ? 1 : 0)).join(" ")
    );
  }
};
// binaryTriangle();

// 15. Alternate 1-0 Triangle
const alternateBinaryTriangle = (n = 5) => {
  for (let i = 1; i <= n; i++) {
    console.log(
      Array.from({ length: i }, (_, j) => (i % 2 === j % 2 ? 1 : 0)).join(" ")
    );
  }
};
// alternateBinaryTriangle();

// 16. Hollow Pyramid
const hollowPyramid = (n = 5) => {
  for (let i = 1; i <= n; i++) {
    if (i === 1) console.log(" ".repeat(n - 1) + "*");
    else if (i === n) console.log("* ".repeat(n));
    else
      console.log(" ".repeat(n - i) + "*" + " ".repeat((i - 1) * 2 - 1) + "*");
  }
};
// hollowPyramid();

// 17. Sandglass Pattern
const sandglassPattern = (n = 5) => {
  invertedPyramid(n);
  for (let i = 2; i <= n; i++) console.log(" ".repeat(n - i) + "* ".repeat(i));
};
// sandglassPattern();

// 18. Hourglass Pattern
const hourglassPattern = (n = 5) => {
  for (let i = n; i > 0; i--) console.log(" ".repeat(n - i) + "* ".repeat(i));
  for (let i = 2; i <= n; i++) console.log(" ".repeat(n - i) + "* ".repeat(i));
};
// hourglassPattern();

// 19. Triangle with Same Number
const triangleWithSameNumber = (n = 5) => {
  for (let i = 1; i <= n; i++) console.log(String(i).repeat(i));
};
// triangleWithSameNumber();

// 20. Binary Pyramid
const binaryPyramid = (n = 5) => {
  for (let i = 1; i <= n; i++) {
    console.log(
      " ".repeat(n - i) + Array.from({ length: i }, (_, j) => j % 2).join(" ")
    );
  }
};
// binaryPyramid();

// 21. Number Pattern with Incrementing Value
const incrementingNumberPattern = (n = 5) => {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    console.log(Array.from({ length: i }, () => count++).join(" "));
  }
};
// incrementingNumberPattern();

// 22. Numeric Right Triangle with Decreasing Row Start
const decreasingRowStartTriangle = (n = 5) => {
  for (let i = 1; i <= n; i++)
    console.log(Array.from({ length: i }, (_, j) => i - j).join(" "));
};
// decreasingRowStartTriangle();

// 23. Inverted Pyramid with Numbers
const invertedNumberPyramid = (n = 5) => {
  for (let i = n; i >= 1; i--)
    console.log(
      " ".repeat(n - i) + Array.from({ length: i }, (_, j) => j + 1).join(" ")
    );
};
// invertedNumberPyramid();

// 24. Right-Shifted Triangle
const rightShiftedTriangle = (n = 5) => {
  for (let i = 1; i <= n; i++) console.log(" ".repeat(n - i) + "* ".repeat(i));
};
// rightShiftedTriangle();

// 25. Reverse Right-Shifted Triangle
const reverseRightShiftedTriangle = (n = 5) => {
  for (let i = n; i >= 1; i--) console.log(" ".repeat(n - i) + "* ".repeat(i));
};
// reverseRightShiftedTriangle();

// 26. Letter Pyramid
const letterPyramid = (n = 5) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < n; i++)
    console.log(
      " ".repeat(n - i - 1) +
        alphabet
          .slice(0, i + 1)
          .split("")
          .join(" ")
    );
};
// letterPyramid();

// 27. Reverse Letter Pyramid
const reverseLetterPyramid = (n = 5) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = n; i > 0; i--)
    console.log(" ".repeat(n - i) + alphabet.slice(0, i).split("").join(" "));
};
// reverseLetterPyramid();

// 28. Hollow Diamond
const hollowDiamond = (n = 5) => {
  hollowPyramid(n);
  for (let i = n - 1; i >= 1; i--) {
    console.log(
      " ".repeat(n - i) + "*" + " ".repeat((i - 1) * 2 - 1) + (i > 1 ? "*" : "")
    );
  }
};
// hollowDiamond();

// 29. Square with Diagonals
const squareWithDiagonals = (n = 5) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row +=
        i === 0 ||
        i === n - 1 ||
        j === 0 ||
        j === n - 1 ||
        i === j ||
        i + j === n - 1
          ? "* "
          : "  ";
    }
    console.log(row);
  }
};
// squareWithDiagonals();
