// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

                                            //  bitwise XOR ^ operation  
// 0 XOR 0 is 0
// 0 XOR 1 is 1
// 1 XOR 0 is 1
// 1 XOR 1 is 0

function singleNumber (nums) {
    let index = 0
    for(let num of nums){
        index ^= num
    }
    return index
}
console.log(singleNumber([4, 1, 2, 1, 2]));
// Output: 4