// Q-16 Given an array arr[], swap the kth element from the beginning with the kth element from the end.

// Note: 1-based indexing is followed.

// Examples :

// Example-1
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], k = 3
// Output: [1, 2, 6, 4, 5, 3, 7, 8]
// Explanation: 3rd element from beginning is 3 and 3rd element from end is 6, so we replace 3 & 6.

// Example-2
// Input: arr[] = [5, 3, 6, 1, 2], k = 2
// Output: [5, 1, 6, 3, 2]
// Explanation: 2nd element from beginning is 3 and from end is 1.

// Link for the question:- https://www.geeksforgeeks.org/problems/swap-kth-elements5500/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-16

function swapKth(arr, k) {
        [arr[k-1] , arr[arr.length-k]] = [arr[arr.length-k] , arr[k-1]]
        return arr;
    }
    console.log(swapKth([1, 2, 3, 4, 5, 6, 7, 8], 3));
    console.log(swapKth([5, 3, 6, 1, 2], 2));
    
    