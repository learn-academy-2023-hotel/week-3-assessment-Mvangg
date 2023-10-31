// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe ("finalArray", () => {
  it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The Length of the array is determined by the argument of the function", () => {
    expect(finalArray(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(finalArray(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Output: ReferenceError: finalArray is not defined


// b) Create the function that makes the test pass.

const finalArray = (inputtedNumber) => {
  let letsStartwithThese = [1, 1]
  if (inputtedNumber <= 2) {
    return `Error, please insert a number higher than 2.`
  } else {
    for (let i = 2; i < inputtedValue; i++) {
      letsStartwithThese.push(letsStartwithThese[i - 1] + letsStartwithThese[i - 2])
    }
    return letsStartwithThese
  }
}
// Output: PASS 

// console.log(finalArray(fibonacciLength1)) //Output: [ 1, 1, 2, 3, 5, 8 ]
// console.log(finalArray(fibonacciLength2)) //Output: [ 1,  1,  2,  3,  5,  8, 13, 21, 34, 55 ]
// console.log(finalArray(3)) //Output: [ 1, 1, 2 ]
// console.log(finalArray(2)) //Output: Error, please insert a number higher than 2.

// Pseudo code:
// Input: A number (greater than 2)
// Output: An array containing the Fibonacci sequence.
// Create a function that will take in a number that is greater than 2
// Create a variable that is an array of the first two numbers of a Fibonnaci sequence
  // Create a conditional statement.
    // If the number is less than or equal to 2, return a message.
    // OR else, create a for loop with the function starting at index 2 (first two index is [1, 1]), stops at the inputted number, and continue with indentation 1 each.
      // Utilize .push to add the values from the variable containing the first two numbers of a Fibonacci sequence.
        // [i-1] + [i-2] equation will take the previous index plus the index before the previous index and add them together.
          // return the new variable that started with the first two numbers of the Fibonacci sequence plus the new added values.

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]


describe("sortedObject", () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest.", () => {
    expect(sortedObject(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(sortedObject(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

//Output: ReferenceError: sortedObject is not defined

// b) Create the function that makes the test pass.

const sortedObject = (obj) => {
  const objValues = Object.values(obj)
  return objValues.sort((value1, value2) => value1 - value2)
}
// console.log(sortedObject(studyMinutesWeek1)) //Output: [ 15, 15, 20, 30, 30, 60, 90 ]
// console.log(sortedObject(studyMinutesWeek2)) //Output: [ 10, 15,  20, 45, 60, 65, 100 ]
// console.log(sortedObject([50, 29, 78, 30, 50])) //Output: [ 29, 30, 50, 50, 78 ]
                                                                                                                                                                                               
// Pseudo code:
// Input: An object with key/value pairs with the value = number.
// Output: An array with the object's values sorted from smallest to largest.
// Create a function with the object as the argument.
  // Create a new variable that will hold function Object.values(). Object.values() will extract the values from the object that is passed through.
  // Sort the values from the object that is passed through Object.values. 
    // Utilizing value1, and value2 as parameters, the .sort method will sort it checking if value1-value2 is negative or positive. If negative, value 1 will return before value 2. If positive, value1 will return after value 2. Iteration from .sort will go through the whole object's values (from Object.values()).