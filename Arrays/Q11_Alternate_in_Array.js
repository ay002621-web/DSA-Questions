// Q-11 You are given an array arr[], the task is to return a list elements of arr in alternate order (starting from index 0).

// Examples:

// Example-1
// Input: arr[] = [1, 2, 3, 4]
// Output: 1 3
// Explanation:
// Take first element: 1
// Skip second element: 2
// Take third element: 3
// Skip fourth element: 4

// Example-2
// Input: arr[] = [1, 2, 3, 4, 5]
// Output: 1 3 5
// Explanation:
// Take first element: 1
// Skip second element: 2
// Take third element: 3
// Skip fourth element: 4
// Take fifth element: 5

// Link for the question:- https://www.geeksforgeeks.org/problems/print-alternate-elements-of-an-array/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-11

function getAlternates(arr) {
        let output=[arr[0]]
        for(let i=2; i<arr.length; i+=2){
            output.push(arr[i])
        }
        return output;     
    }
    console.log(getAlternates([1, 2, 3, 4]));
    console.log(getAlternates([1, 2, 3, 4, 5]));
    
    
