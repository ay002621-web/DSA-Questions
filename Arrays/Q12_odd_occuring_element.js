// Q-12 Given an array of arr[] positive integers where all numbers occur even number of times except one number which occurs odd number of times. Return that number.

// Examples:

// Example-1
// Input:arr[] = [1, 2, 3, 2, 3, 1, 3]
// Output: 3
// Explaination: 3 occurs three times.

// Example-2
// Input:arr[] = [5, 7, 2, 7, 5, 2, 5]
// Output: 5
// Explaination: 5 occurs three times.

//Link for the question:- https://www.geeksforgeeks.org/problems/find-the-odd-occurence4820/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions

//Answer-12

function getOddOccurrence(arr) {
        let frequency={ }
       for(let i=0; i<arr.length; i++){
           if(!frequency[arr[i]]){
               frequency[arr[i]]=1
           }
           else{
               frequency[arr[i]]++
           }
       }
       for(let j=0; j<arr.length; j++){
           if(frequency[arr[j]] % 2 != 0){
               return arr[j]
           }
       }
    }
    console.log(getOddOccurrence([1, 2, 3, 2, 3, 1, 3]));
    console.log(getOddOccurrence([5, 7, 2, 7, 5, 2, 5]));
    
    
