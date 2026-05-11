//Q-3 Given two arrays a[] and b[], your task is to determine whether b[] is a subset of a[].

// Examples:

// Input: a[] = [11, 7, 1, 13, 21, 3, 7, 3], b[] = [11, 3, 7, 1, 7]
// Output: true
// Explanation: b[] is a subset of a[]

// Link for the Question:- https://www.geeksforgeeks.org/problems/array-subset-of-another-array2317/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions

//Answer-3
function isSubset(a, b) {

    let freq = {};

    // Step 1: Count elements of a
    for (let i = 0; i < a.length; i++) {

        if (freq[a[i]]===undefined) {
            freq[a[i]]=1;
        } else {
            freq[a[i]]++
        }
    }

    // Step 2: Check elements of b
    for (let j = 0; j < b.length; j++) {

        if (freq[b[j]]==undefined || freq[b[j]]<=0) {
            return false;
        }

        freq[b[j]]-- ;
    }

    return true;
}

console.log(isSubset([10, 5, 2, 23, 19], [19, 10, 5, 2]));
