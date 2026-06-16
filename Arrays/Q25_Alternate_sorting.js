// Q-25 Given an array arr of distinct integers. Rearrange the array in such a way that the first element is the largest and the second element is the smallest, the third element is the second largest and the fourth element is the second smallest, and so on.

// Examples:

// Example-1
// Input: arr[] = [7, 1, 2, 3, 4, 5, 6]
// Output: [7, 1, 6, 2, 5, 3, 4]
// Explanation: The first element is first maximum and second element is first minimum and so on.

// Example-2
// Input: arr[] = [1, 6, 9, 4, 3, 7, 8, 2]
// Output: [9, 1, 8, 2, 7, 3, 6, 4]
// Explanation: The first element is first maximum and second element is first minimum and so on.

// Link for the question:- https://www.geeksforgeeks.org/problems/alternative-sorting1311/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-25
function alternateSort(arr) {
        // code here
        let output = []
        let greatest=arr.length-1;
        let smallest=0
        arr.sort((a,b)=>a-b)
      
        
        for(let i=0; i<arr.length; i++){
            if(i%2==0){
                output.push(arr[greatest])
                greatest--
            }
            if(i%2!=0){
                output.push(arr[smallest])
                smallest++
            }
        }
        return output;
        
    }
    console.log(alternateSort([7, 1, 2, 3, 4, 5, 6]));
    console.log(alternateSort([1, 6, 9, 4, 3, 7, 8, 2]));
    
    