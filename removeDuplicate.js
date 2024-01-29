// Given an integer array nums sorted in non-decreasing order, remove the duplicates 
// in-place such that each unique element appears only once. The relative order of
//  the elements should be kept the same. Then return the number of unique elements in nums.

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log([... new Set(nums)])

// output = [0, 1, 2, 3, 4];