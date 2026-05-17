// Q-10 Given an array arr[] and two elements x and y, return the element that occurs more frequently. If both elements have the same frequency, return the smaller one.

// Examples:

//Example-1
// Input: arr[] = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], x = 4, y = 5
// Output: 4
// Explanation: frequency of 4 is 4.frequency of 5 is 1.Since 4>1 so return 4

//Example-2
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], x = 1, y = 7
// Output: 1
// Explanation: frequency of 1 is 1.frequency of 7 is 1.Since 1 < 7, return 1.

//Link for the question:- https://www.geeksforgeeks.org/problems/who-has-the-majority/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions

//Answer-10
function moreFrequent(arr, x, y) {
        let frequencyOfX=0;
        let frequencyOfY=0;
        for(let i=0; i<arr.length; i++){
            if(arr[i]==x){
                frequencyOfX++;
            }
            else if(arr[i]==y){
                frequencyOfY++;
            }
            
        }
        if(frequencyOfX>frequencyOfY ){
            return x
        }
        else if(frequencyOfX<frequencyOfY){
            return y
    }
    else{
       return  Math.min(x,y)
    }
        
}
console.log(moreFrequent([1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], 4, 5));
console.log(moreFrequent([1, 2, 3, 4, 5, 6, 7, 8], 1, 7));

