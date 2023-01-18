/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const answer = []
    for (let i = 0; i < nums.length; i++) {
        const value = nums[nums[i]]
        answer.push(value)
    }
    return answer
};