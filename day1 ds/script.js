//  // time complexity: O(N)
// /var isGreater = function(totalCandies, candies, i){
// //     // assume that the totalCandies is greater than all the other kids candies except index i <- assumption
//    let assumption = true;

// //     // iterate / traverse the candies array <- index
//    for(let index=0; index<candies.length; index++){
// //         // except the index i
//    if(index != i){
// //             // check if whether the totalCandies is less than the candies[index]
//              if true => update the assumption
//             if(totalCandies < candies[index]){
//                 assumption = false;
//          }
//         }
//         }

// //     // return the assumption
//      return assumption;
//  }



// var kidsWithCandies = function(candies, extraCandies) {
//         let result = [];
//         let greatestCandy = Math.max(...candies);
    
//         candies.forEach((candy) => {
//             result.push(candy + extraCandies >= greatestCandy);
//         });
    
//         return result;
//     };
//     console.log(result);

// let numbers = [1, 2, 3, 4, 5];

// let squares = numbers.map((value) => {
//     return value ** 2;
// });
// console.log(numbers);
// console.log(squares);


//let numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// let printNumber = (value) => {
//     console.log(value);
// }

// numbers.forEach(printNumber);

// numbers.forEach((value) => {
//     console.log(value);
//  });


//  numbers.forEach((value) => console.log(value));


  
// console.log('N = ${10},excutions = ${Math.log2(10}');
// console.log('N = ${100},excutions = ${Math.log2(100}');
// console.log('N = ${90},excutions = ${Math.log2(90}');


// @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
 // */
//  var nums = [2,7,11,15];
//  var target = [9];
// var twoSum = function(nums, target) {

//     for(let i=0; i<nums.length-1; i++){
//         for(let j=i+1; j<nums.length; j++){
//            console.log(nums[i] + nums[j]);
//             }
//         }
//     }

// console.log(nums);
// console.log(target);
// console.log(twoSum);






// var twoSum = function(nums, target) {
//     let indexedNums = [];

//     for(let index in nums){
//         indexedNums.push([Number(index), nums[index]]);
//     }

//     indexedNums.sort((a, b) => a[1]-b[1]);

//     let left = 0;
//     let right = indexedNums.length - 1;

//     while(left < right){
//         if(indexedNums[left][1] + indexedNums[right][1] == target){
//             return [indexedNums[left][0], indexedNums[right][0]];
//         } else if(indexedNums[left][1] + indexedNums[right][1] < target){
//             left++;
//         } else {
//             right--;
//         }
//     }
// };



// function print(N){
//     if(N == 0)return;
//     print(N-1);
//     console.log(N);
    
// }
// print(5);

function sayhi(){
     console.log("i m prabha");
    }
sayhi();