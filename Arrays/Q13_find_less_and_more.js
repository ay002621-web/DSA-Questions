// Q-13 Given a sorted array arr[] and a value target, return an array of size 2. The first value is the number of elements less than or equal to the target, and the second value is the number of elements greater than or equal to the target.

// Examples:

// Example-1
// Input: arr[] = [1, 2, 8, 10, 11, 12, 19], target = 0
// Output: [0, 7]
// Explanation: There are no elements less or equal to 0 and 7 elements greater to 0.

// Example-2
// Input: arr[] = [1, 5, 8, 12, 12, 12, 19], target = 12
// Output: [6, 4]
// Explanation: There are 6 elements less or equal to 12 and 4 elements greater or equal to 12.

// Link for the question :- https://www.geeksforgeeks.org/problems/smaller-and-larger4005/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions
//Answer-13

function getMoreAndLess(arr, target) {
        let lesser=0;
        let greater=0;
        for(let i=0; i<arr.length; i++){
            if(arr[i]<target){
                lesser++;
            }
            else if(arr[i]>target){
                greater++;
            }
            else if(arr[i]==target){
                lesser++;
                greater++;
            }
        }
        return [lesser, greater]
    }
    console.log(getMoreAndLess([1, 5, 8, 12, 12, 12, 19], 12));
    