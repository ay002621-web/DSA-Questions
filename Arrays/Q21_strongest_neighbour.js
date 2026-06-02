//Q-21 You are given an array arr[] consisting of positive integers. Return the maximum of every adjacent pairs in the array.

// Examples:

// Example-1
// Input: arr[] = [1, 2, 2, 3, 4, 5]
// Output: [2, 2, 3, 4, 5]
// Explanation: Maximum of arr[0] and arr[1] is 2, that of arr[1] and arr[2] is 2, ... and so on.

// Example-2
// Input: arr[] = [5, 5]
// Output: [5]
// Explanation: We only have two elements so max of 5 and 5 is 5 only.

// Link for the question:- https://www.geeksforgeeks.org/problems/strongest-neighbour/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-21

function maxAdj(arr) {
        
        let output=[]
        for(let i=0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                output.push(arr[i])
            }
            else{
                output.push(arr[i+1])
            }
        }
        return output;
    }
    console.log(maxAdj([1, 2, 2, 3, 4, 5]));
    console.log(maxAdj( [5, 5]));
    
    