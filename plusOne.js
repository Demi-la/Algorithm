// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

function plusOne (nums) {
 for(let i = nums.length -1; i >= 0; i--){
    if(nums[i] < 9){
        nums[i]++
        return nums
    } else{
        nums[i] = 0
    }
 }
 nums.unshift(1)
 return nums
}
console.log (plusOne([9,9]))
// output [1, 0, 0]