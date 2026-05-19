// Q-17 Given an array arr[] containing distinct positive integers, and two integers start and end defining a range. Determine if the array contains all elements within inclusive range [start, end].

// Note: If the array contains all elements in the given range return true otherwise return false.

// Examples :

// Example-1
// Input: start = 2, end = 5, arr[] =  [1, 4, 5, 2, 7, 8, 3]
// Output: true
// Explanation: All integers within the range [2, 5] are 2, 3, 4, and 5, and all of them are present in the array. Therefore, the answer is true for this test case.

// Example-2
// Input: start = 2, end = 6, arr[] = [1, 4, 5, 2, 7, 8, 3]
// Output: false
// Explanation: The array does not contain 6; hence, it does not contain all the elements in the range [2, 6]. Therefore, the output is false.

// Link for the question:- https://www.geeksforgeeks.org/problems/elements-in-the-range2834/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-17

function checkElements(start, end, arr) {
        let i=0;
        while(start<=end || i<=arr.length){
            if(i>arr.length){
                return false;
            }
            if(arr[i]!=start){
                i+=1;
            }
            if(arr[i]==start){
                i=0;
                start+=1
            }
        }
        return true;
    }
    console.log(checkElements(2, 5, [1, 4, 5, 2, 7, 8, 3]));
    console.log(checkElements(2, 6, [1, 4, 5, 2, 7, 8, 3]));
    
    