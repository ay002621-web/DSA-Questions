// Q-15 Given an array arr[] containing strings of names. Your task is to return the longest string. If there are multiple names of the longest size, return the first occurring name.

// Examples :

// Example-1
// Input: arr[] = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]
// Output: "GeeksforGeeks"
// Explanation: Name "GeeksforGeeks" has maximum length among all names. 

// Example-2
// Input: arr[] = ["Apple", "Mango", "Orange", "Banana"]
// Output: "Orange"
// Explanation: Names "Orange" and "Banana" both have maximum length among all names but Orange comes first so answer will be "Orange". 

// Link for the question:- https://www.geeksforgeeks.org/problems/display-longest-name0853/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-15

function  longest(arr) {
        let longestWord=arr[0]
        for(let i=1; i<arr.length; i++){
            if(arr[i].length>longestWord.length){
                longestWord=arr[i]
            }
        }
        return longestWord;
    }
    console.log(longest(["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]));
    console.log(longest(["Apple", "Mango", "Orange", "Banana"]));
    
    
