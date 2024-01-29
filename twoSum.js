///question 1    TWO SUM
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const numbers = [2, 7, 11, 15];
function twoSum (nums, target) {
    const hashMap = {}
    for(let i = 0; i<nums.length; i++){
        let complement = target - nums[i]
        if(complement in hashMap){
            return [hashMap[complement], i]
        }
        hashMap[nums[i]] = i
    }

}
console.log(twoSum(numbers, 9));