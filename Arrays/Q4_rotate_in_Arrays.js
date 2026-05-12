//Q4 Given an array arr, rotate the array by one position in clockwise direction.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5]
// Output: [5, 1, 2, 3, 4]
// Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.

//Link for the question:- https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions

//Answer4
function rotate(arr){
    arr.unshift(arr[arr.length-1]);
    arr.pop();
    return arr;
}
console.log(rotate([1,2,3,4,5]));





    