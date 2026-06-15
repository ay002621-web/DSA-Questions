// Q-24 Given two arrays of arr1 and arr2, the task is to calculate the product of the maximum element of the first array arr1, and minimum element of the second array arr2.

// Examples :

// Example-1
// Input : arr1[] = [5, 7, 9, 3, 6, 2],  arr2[] = [1, 2, 6, 1, 9]
// Output : 9
// Explanation: The max in arr1 is 9. The min element in arr2 is 1. The product is 9*1 = 9.

// Example-2
// Input : arr1[] = [0, 0, 0, 0],  arr2[] = [1, 1, 2]
// Output : 0

// Link for the question :- https://www.geeksforgeeks.org/problems/product-of-maximum-in-first-array-and-minimum-in-second3943/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-24

function minMaxProduct(arr1, arr2) {
        let max=arr1[0]
        let min =arr2[0]
        let n=0
       if(arr1.length >= arr2.length){
           n=arr1.length
       }
       else{
           n=arr2.length
       }
        for(let i=0; i<n; i++){
            if(max<arr1[i]){
                max=arr1[i]
            }
            if(min>arr2[i]){
                min=arr2[i]
            }
        }
        return max*min
    }
    console.log(minMaxProduct([5, 7, 9, 3, 6, 2], [1, 2, 6, 1, 9]));
    console.log(minMaxProduct([0, 0, 0, 0], [1, 1, 2]));
    
    