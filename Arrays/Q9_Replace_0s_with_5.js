// Q-9 You are given an integer n. You need to convert all zeroes of n to 5.

// Examples:

//Example-1
// Input: n = 1004
// Output: 1554
// Explanation: There are two zeroes in 1004 on replacing all zeroes with 5, the new number will be 1554.

//Example-2
// Input: n = 121
// Output: 121
// Explanation: Since there are no zeroes in 121, the number remains as 121.

//Link for the question:-https://www.geeksforgeeks.org/problems/replace-all-0s-with-5/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions

//Answer-9
function convertFive(num) {       
        let nString=num.toString();
        let convertedOutput=''
        for(let i=0; i<nString.length; i++){  
            if(nString[i]!=0){
                convertedOutput+=nString[i];
            }
            else if(nString[i]==0){
                convertedOutput+='5'
            }
        }
        return convertedOutput;
    }
    console.log(convertFive(1004));
    console.log(convertFive(121));
    


    
