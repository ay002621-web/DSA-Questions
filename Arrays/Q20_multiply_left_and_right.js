// Q-20 Given an array of integers arr[], divide it into two subarrays left and right such that left contains the first half of the elements and right contains the remaining elements. If the size of the array is odd, the right subarray contains one extra element. Compute the sum of elements in both subarrays and return the product of these two sums.

// Examples :

// Example-1
// Input : arr = [1, 2, 3, 4]
// Output : 21
// Explanation: Sum up an array from index 0 to 1 = 3, Sum up an array from index 2 to 3 = 7. Their multiplication is 21.

// Example-2
// Input : arr = [1, 2] 
// Output :  2 
// Explanation: Their multiplication is 1*2 is equal to 2.

// Link for the question:- https://www.geeksforgeeks.org/problems/multiply-left-and-right-array-sum1555/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-20

function multiply(arr) {
        let sumOfLeft=0;
        let sumOfRight=0;
        let firstHalf=Math.ceil(((arr.length-1)/2)-1);

        for(let i=0; i<=arr.length-1; i++){
            if(i<=firstHalf){
                sumOfLeft+=arr[i]
            }
            else{
                sumOfRight+=arr[i]
            }
        }
        return sumOfLeft*sumOfRight
    }
    console.log(multiply([1, 2, 3, 4]));
    console.log(multiply([1, 2]));
    
    
