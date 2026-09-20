/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let result=[]
    let prefix=new Array(nums.length)
    let suffix=new Array(nums.length)

    //  for prefix----
    prefix[0]=nums[0]
    for(let i=1; i<nums.length; i++){
        prefix[i]=prefix[i-1] * nums[i]
    }

    //  for suffix---
    suffix[nums.length-1]=nums[nums.length-1]
    for(let i= nums.length-2; i>=0; i--){
        suffix[i] = suffix[i+1] * nums[i]
    }

    // now prepare result---
    result[0]=suffix[1]
    result[nums.length-1]=prefix[nums.length-2]

    for(let i=1; i<nums.length-1; i++){

        result[i]=prefix[i-1] * suffix[i+1]
    }

    return result
};