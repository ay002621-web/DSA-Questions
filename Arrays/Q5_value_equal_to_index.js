// Q-5 Given an array arr[]. Find the elements whose value is equal to the position where they appear.

// Note: There can be more than one element in the array which have the same value as its position. You need to include the position of every such element.

// Examples:

// Input: arr[] = [15, 2, 45, 4, 7]
// Output: [2, 4]
// Explanation: Here, arr[2] = 2 exists here and arr[4] = 4 exists.
// Link for the question :- https://www.geeksforgeeks.org/problems/value-equal-to-index-value1330/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions

//Answer-5

function equal(arr){
    let find =[]
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i]==i+1){
            find.push(arr[i]);
        }
    }    
    return find;   
}   
console.log(equal([15,2,45,4,7]))