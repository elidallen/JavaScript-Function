// 1. Function to find the maximum of two numbers
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2. Function to find the maximum of three numbers (function expression)
  const maxOfThree = function(x, y, z) {
    return x >= y ? (x >= z ? x : z) : (y >= z ? y : z);
  };
  
  console.log(maxOfThree(5, 12, 7));
  
  // 3. Function to check if a character is a vowel (function declaration)
  function isCharAVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
  }
  
  console.log(isCharAVowel('a')); // Should return true
  console.log(isCharAVowel('B')); // Should return false
  
  // 4. Function to sum an array of numbers (function expression)
  const sumArray = function(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  };
  
  console.log(sumArray([2, 4, 5])); // Should return 11
  
  // 5. Function to multiply an array of numbers (function declaration)
  function multiplyArray(numbers) {
    return numbers.reduce((acc, curr) => acc * curr, 1);
  }
  
  console.log(multiplyArray([2, 4, 5])); // Should return 40
  
  // 6. Function to count the number of arguments passed to it (function expression)
  const numArgs = function() {
    return arguments.length;
  };
  
  console.log(numArgs(1, 2, 3, 4)); // Should return 4
  
  // 7. Function to reverse a string (function declaration)
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString('rockstar')); // Should return 'ratskcor'
  
  // 8. Function to find the length of the longest string in an array (function expression)
  const longestStringInArray = function(strings) {
    const lengths = strings.map(str => str.length);
    return Math.max(...lengths);
  };
  
  console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning'])); // Should return 7
  
  // 9. Function to find strings longer than a given number (function declaration)
  function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
  }
  
  console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); // Should return ["hello", "morning"]
  
  // 10. Function to add a list of numbers together (function expression)
  const addList = function(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  };
  
  console.log(addList(1, 2, 3, 4, 5)); // Should return 15
  console.log(addList()); // Should return 0