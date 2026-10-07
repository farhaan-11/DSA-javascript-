/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums,i=0,map={}) {
    if(nums.length<=i) return 0

    if(map[i]!=undefined) return map[i]
    // pick ---
    let pick = nums[i] + rob(nums, i+2,map)

    //  not pick 
    let notPick = rob(nums,i+1,map)

    map[i]=Math.max(pick,notPick)

    return map[i]
};