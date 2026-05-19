// Q-14 Given an array arr[], the task is to find whether the arr is palindrome or not. If the arr is palindrome then return true else return false.

// Note: An array is said to be palindrome if its reverse array matches the original array. 

// Examples:

// Example-1
// Input: arr = [1, 2, 3, 2, 1]
// Output: true
// Explanation: If we reverse, we get [1, 2, 3, 2, 1] which is the same as before. So, the answer is true.

// Example-2
// Input: arr = [1, 2, 3, 4, 5]
// Output: false
// Explanation:  If we reverse it, we get [5, 4, 3, 2, 1] which is the not same as before. So, the answer false.

// Link for the question:- https://www.geeksforgeeks.org/problems/perfect-arrays4645/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-14
function isPalindrome(arr) {
        let loopRun=Math.floor((arr.length)/2)
        for(let i=0; i<=loopRun; i++){
            if(arr[i]!=arr[arr.length-1-i]){
                return false;
            }
        }
        return true;
    }
    console.log(isPalindrome([1,2,3,2,1]));
    console.log(isPalindrome([1,2,3,4,5]));
    
    