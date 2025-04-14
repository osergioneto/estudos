/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], 1);
        } else if (map.get(nums[i]) && map.get(nums[i]) === 1) {
            map.delete(nums[i]);
        }
    }

    return map.keys().next().value;
};