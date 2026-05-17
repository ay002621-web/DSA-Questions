// Q-8 Given an unsorted array arr[]. Find the count of elements less than or equal to the given element x.

// Examples:

//Example-1
// Input: x = 9, arr[] = [10, 1, 2, 8, 4, 5] 
// Output: 5
// Explanation: The 5 elements are 1, 2, 8, 4 and 5.

//Example-2
// Input: x = 2, arr[] = [1, 2, 2, 5, 7, 2, 9] 
// Output: 4 
// Explanation: The 4 elements are 1, 2, 2 and 2.

//Link for the question:-https://www.geeksforgeeks.org/problems/count-of-smaller-elements5947/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions

//Answer-8
function countOfElements(x, arr) {
        arr.sort((a,b)=> a-b)
        for(let i=0; i<arr.length; i++){
            if(arr[i]>x){
                return i;
            }
        }
        return 0;
    }
    console.log(countOfElements(9, [10, 1, 2, 8, 4, 5]));
    
    console.log(countOfElements(2, [1, 2, 2, 5, 7, 2, 9]));
    
