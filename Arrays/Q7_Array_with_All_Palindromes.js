// Q-7 Given an array arr[] of positive integers. Return true if all the array elements are palindrome otherwise, return false.

// Examples:
   //Example-1
// Input: arr[] = [111, 222, 333, 444, 555]
// Output: true
// Explanation:
// arr[0] = 111, which is a palindrome number.
// arr[1] = 222, which is a palindrome number.
// arr[2] = 333, which is a palindrome number.
// arr[3] = 444, which is a palindrome number.
// arr[4] = 555, which is a palindrome number.
// As all numbers are palindrome so This will return true.

// Example-2
// Input: arr[] = [121, 131, 20]
// Output: false
// Explanation: 20 is not a palindrome hence the output is false.

//Link for the question:- https://www.geeksforgeeks.org/problems/palindromic-array-1587115620/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions

//Answer-7

function isPalinArray(arr){
    for(let i=0; i<arr.length; i++){
        let reverseElement=arr[i].toString().split("").reverse().join("")
        if(arr[i]!=reverseElement || arr[i].toString().length!=reverseElement.length){
            return false;
        }
    }
    return true;
}
console.log(isPalinArray([111, 222, 333, 444, 555]));
console.log(isPalinArray([121, 131, 20]));




