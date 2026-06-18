// Q-26 Given an array arr[] of integers which may or may not contain duplicate elements. Your task is to remove duplicate elements. Your result should have elements according their first appearance in the input array.

// Examples:

// Example-1
// Input: arr[] = [1, 2, 3, 1, 4, 2]
// Output: [1, 2, 3, 4]
// Explanation: 2 and 1 have more than 1 occurence.

// Example-2
// Input: arr[] = [1, 2, 3, 4]
// Output: [1, 2, 3, 4]
// Explanation: There is no duplicate element.

// Link for the question:- https://www.geeksforgeeks.org/problems/remove-duplicates-from-unsorted-array4141/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-26

function removeDuplicate(arr) {
        // code here
        let frequency={}   
        let output=[]
      for(let i=0; i<arr.length; i++){
        if(!frequency[arr[i]]){
            frequency[arr[i]]=1
        }  
        else if(frequency[arr[i]]){
            frequency[arr[i]]++
        }
        if(frequency[arr[i]]==1){
            output.push(arr[i])
        }
        console.log(frequency);
        
      }
      return output;
  
   }
   console.log(removeDuplicate([1, 2, 3, 1, 4, 2]));
   