// Q-19 Given an array of car numbers car[], an array of penalties fine[], and an integer date, determine the total fine collected on that date. The fine is collected based on parity, i.e., on an even date, fines are collected from odd-numbered cars, and on an odd date, fines are collected from even-numbered cars.

// Examples:

// Example-1
// Input: date = 12, car[] = [2375, 7682, 2325, 2352], fine[] = [250, 500, 350, 200]
// Output: 600
// Explanation: The date is 12 (even), so we collect the fine from odd-numbered cars. The odd-numbered cars and the fines associated with them are as follows:
// 2375 -> 250
// 2325 -> 350
// The sum of the fines is 250+350 = 600

// Example-2
// Input: date = 8, car[] = [2222, 2223, 2224], fine[] = [200, 300, 400]
// Output: 300

// Link for the question:- https://www.geeksforgeeks.org/problems/find-the-fine4353/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions

// Answer-19

function totalFine(date, car, fine){
        let output=0
        if(date%2===0){
            for(let i=0; i<car.length; i++){
                if(car[i]%2!==0){
                  output+= fine[i]  
                }
            }
        }
        if(date%2!==0){
             for(let i=0; i<car.length; i++){
                if(car[i]%2===0){
                  output+= fine[i]  
                }
            }
        }
        return output;
    }
    console.log(totalFine(12, [2375, 7682, 2325, 2352], [250, 500, 350, 200]));
    console.log(totalFine(8, [2222, 2223, 2224], [200, 300, 400]));
    