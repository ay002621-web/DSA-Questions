// Q-18 Given an array, arr[] of positive elements, and an integer k, the task is to left-rotate the array k indexes.
// Note: Rotate the array even if the k is greater than the size of the array. In these cases after every full array rotation, the array comes the same as the original array.

// Examples:

// Example-1
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7], k = 2 
// Output: [3, 4, 5, 6, 7, 1, 2]
// Explanation: Rotating the above array by 2 will make the output array.

// Example-2
// Input: arr[] = [1, 2, 3, 4, 5, 6],  k = 12
// Output: [1, 2, 3, 4, 5, 6]
// Explanation: left Rotation of above array 12 times gives same array as output. 

// Example-3
// Input: arr[] = [1, 2, 3, 4, 5, 6],  k = 11
// Output: [6, 1, 2, 3, 4, 5]
// Explanation: left Rotation of above array 11 times & in resultant output 6 comes to the statring position.

// Link for the question:- https://www.geeksforgeeks.org/problems/quick-left-rotation3806/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-18
function leftRotate(arr, k) {
        let loopRun=k%arr.length
        for(let i=0; i<loopRun; i++){
            arr.push(arr[0])
            arr.shift()
        }
        return arr;
          
    }
    console.log(leftRotate([1, 2, 3, 4, 5, 6, 7], 2));
    console.log(leftRotate([1, 2, 3, 4, 5, 6], 12));
    console.log(leftRotate([1, 2, 3, 4, 5, 6], 11));
    
    
    