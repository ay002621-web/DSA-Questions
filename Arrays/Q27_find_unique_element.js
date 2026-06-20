// Q-27 Given an array of elements occurring in multiples of k, except one element which doesn't occur in multiple of k. Return the unique element.

// Examples:

// Example-1
// Input: k = 3, arr[] = [6, 2, 5, 2, 2, 6, 6]
// Output: 5
// Explanation: Every element appears 3 times except 5.

// Example-2
// Input: k = 4, arr[] = [2, 2, 2, 10, 2]
// Output: 10
// Explanation: Every element appears 4 times except 10.

// Link for the question:- https://www.geeksforgeeks.org/problems/find-unique-element2632/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions


// Answer-27

function findUnique(k, arr){
  let frequency = {}
  for(let i=0; i<arr.length; i++){
    if(!frequency[arr[i]]){
        frequency[arr[i]]=1
    }
    else if(frequency[arr[i]]>=1){
        frequency[arr[i]]++
    }
  }
  for(let j=0; j<arr.length; j++){
    if(frequency[arr[j]]%k!==0){
        return arr[j];    
    }
  }
}
console.log(findUnique(3, [6, 2, 5, 2, 2, 6, 6]));
console.log(findUnique(4, [2, 2, 2, 10, 2]));