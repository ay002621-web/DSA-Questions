//Q-3 Given two arrays a[] and b[], your task is to determine whether b[] is a subset of a[].

// Examples:

// Input: a[] = [11, 7, 1, 13, 21, 3, 7, 3], b[] = [11, 3, 7, 1, 7]
// Output: true
// Explanation: b[] is a subset of a[]

// Link for the Question:- https://www.geeksforgeeks.org/problems/array-subset-of-another-array2317/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions

//Answer-3
function isSubset(a, b) {    
a.sort((x,y)=>x-y);
b.sort((x,y)=>x-y);
let i=0 , j=0;
let n = a.length, m = b.length;

while(i < n && j < m){
    if(a[i] < b[j]){
        i++;
    }else if(a[i] === b[j]){
        i++;
        j++;
    }else{
        return false;
    }
    
}
  return j === m;

}
console.log(isSubset([10, 5, 2, 23, 19], [19, 10, 5, 2]));
