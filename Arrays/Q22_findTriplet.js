// Q-22 Given an array arr[] of integers, check whether there exist three elements such that the sum of two elements is equal to the third element. 

// Example:

// Example-1
// Input: arr[] = [1, 2, 2, 3, 4]
// Output: true
// Explanation: The pair (2, 2) sums to 4.

// Example-2
// Input: arr[] = [5, 4, 3]
// Output: false
// Explanation: No triplets satisfy the condition.

// Example-3
// Input: arr[] = [0, 0, 1, 0, 0, 1]
// Output: true
// Explanation: The pair(0, 1) sums to 1.

// Link for the question:- https://www.geeksforgeeks.org/problems/triplet-family/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-22
function findTriplet(arr) {
        for(let i=0; i<arr.length-1; i++){
            
            for(let j=i+1; j<arr.length; j++){
                let sum=arr[i]+arr[j];
                
                for(let k=0; k<arr.length; k++){
                  if(sum===arr[k] && k!= i && k!= j){
                    return true;
                }
              }
            }
        }
        return false;
    }
    console.log(findTriplet([1, 2, 2, 3, 4]));
    console.log(findTriplet([5, 4, 3]));
    console.log(findTriplet([0, 0, 1, 0, 0, 1]));
    
    
    