// Given a sorted array of distinct integers and a target value,
//  return the index if the target is found. If not, return the 
//  index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

nums = [1, 3, 5, 6]
target = 8
                                                           // linear search approach
// function searchInsertPosition (nums, target) {
//      for(let i = 0; i<nums.length; i++) {
//         if (nums[i] >= target){
//            return i
//         }
//      }
//      return nums.length
// }

// console.log(searchInsertPosition(nums, target))


                                                            // binary search approach

function searchInsertPosition(nums, target) {
  let left = 0;
  let right = nums.length -1;
  while (left <= right ) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid; // Target found, return its index
    } else if (nums[mid] < target) {
     left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }
  return left; // Target not found, return the index where it would be inserted
}

console.log(searchInsertPosition(nums, target));