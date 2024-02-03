// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

 nums = [0, 1, 2, 2, 3, 0, 4, 2];
 val = 3

 function removeElement (nums, val) {
    let index = 0
       for(let i=0; i<nums.length; i++){
        if (nums[i] !== val){
         nums[index] = nums[i]
         index++
        }
       }
       return index
   // return nums.filter((a) => a !== val);
 }
console.log(removeElement(nums,val));
