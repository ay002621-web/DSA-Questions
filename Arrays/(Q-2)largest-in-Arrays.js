
//Q-2 Given an array arr[]. The task is to find the largest element and return it.

// Examples:

// Input: arr[] = [1, 8, 7, 56, 90]
// Output: 90
// Explanation: The largest element of the given array is 90.

//Link for the Question:- https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions

//Answer-2
 function largest(arr){
        let big=arr[1]
        for(let i=0; i<=arr.length-1; i++){
            if(arr[i]>big){
                big=arr[i];
            }           
        }
        return big;
    }
console.log(largest([1, 8, 7, 56, 90]));