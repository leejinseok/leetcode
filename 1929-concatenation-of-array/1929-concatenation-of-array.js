/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const answer = []
    const numsLength = nums.length;
    for (let i = 0; i < numsLength * 2; i++) {
        const currentIndex = i % numsLength
        answer.push(nums[currentIndex])
    }
    return answer
};