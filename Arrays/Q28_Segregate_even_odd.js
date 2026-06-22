// Q-28 Given an array arr, write a program segregating even and odd numbers. The program should put all even numbers first in sorted order, and then odd numbers in sorted order.

// Note:- You don't have to return the array, you have to modify it in-place.

// Example:

// Example-1
// Input: arr[] = [12, 34, 45, 9, 8, 90, 3]
// Output: [8, 12, 34, 90, 3, 9, 45]
// Explanation: Even numbers are 12, 34, 8 and 90. Rest are odd numbers.

// Example-2
// Input: arr[] = [0, 1, 2, 3, 4]
// Output: [0, 2, 4, 1, 3]
// Explanation: 0 2 4 are even and 1 3 are odd numbers.

// Example-3
// Input: arr[] = [10, 22, 4, 6]
// Output: [4, 6, 10, 22]
// Explanation: Here all elements are even, so no need of segregataion

// Link for the question:- https://www.geeksforgeeks.org/problems/segregate-even-and-odd-numbers4629/1?page=3&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-28

function segregateEvenOdd(arr) {
        
        let evenElements=[]
        let oddElements=[]
        arr.sort((a,b)=>a-b)
        for(let i=0; i<arr.length; i++){
           if(arr[i]%2==0){
               evenElements.push(arr[i])
           } 
           else{
               oddElements.push(arr[i])
           }
        }
        
        let output = [...evenElements, ...oddElements]
        for(let j=0; j<output.length; j++){
            arr[j]=output[j]
        }
        return arr
    }
    console.log(segregateEvenOdd([12, 34, 45, 9, 8, 90, 3]));
    console.log(segregateEvenOdd([0, 1, 2, 3, 4]));
    console.log(segregateEvenOdd([10, 22, 4, 6]));
    
    
    