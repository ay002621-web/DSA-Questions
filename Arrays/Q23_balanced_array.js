// Q-23 Given an array arr[] of even size, find the minimum value that needs to be added to any one element so that the array becomes balanced. An array is considered balanced when the sum of elements in the left half is equal to the sum of elements in the right half.

// Examples :

// Example-1
// Input: arr = [1, 5, 3, 2]
// Output: 1
// Explanation: Sum of first 2 elements is 1 + 5  = 6, Sum of last 2 elements is 3 + 2  = 5, To make the array balanced you can add 1.

// Example-2
// Input: arr = [1, 2, 1, 2, 1, 3]
// Output: 2
// Explanation: Sum of first 3 elements is 1 + 2 + 1 = 4, Sum of last three elements is 2 + 1 + 3 = 6, To make the array balanced you can add 2.

// Link for the question:- https://www.geeksforgeeks.org/problems/balanced-array07200720/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-23

function minValueToBalance(arr) {
        let leftSum=0
        let rightSum=0
    for(let i=0; i<arr.length; i++){
        if(i<=(arr.length/2)-1){
            leftSum+=arr[i]
        }
        else{
            rightSum+=arr[i]
        }
    }
    if(leftSum>=rightSum){
        return leftSum-rightSum;
      }
    return rightSum-leftSum;
  }
  console.log(minValueToBalance([1, 5, 3, 2]));
  console.log(minValueToBalance([1, 2, 1, 2, 1, 3]));
  