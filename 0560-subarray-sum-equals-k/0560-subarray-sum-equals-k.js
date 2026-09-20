/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  
    let count=0;
  // brute force approach---
    // for(let i=0; i<nums.length; i++){

    //     let sum=0
    //     for(let j=i; j<nums.length; j++){

    //         sum+=nums[j]
    //         if(sum===k) count++

    //     }
    // }

    //  optimized ----

    let map=new Map()
    let sum=0;
    map.set(0,1)
    // console.log(map)

    for(let i=0; i<nums.length; i++){
        sum+=nums[i]
        let rem=sum - k

        if(map.has(rem)){
            count+=map.get(rem)
        } 

        map.set(sum, (map.get(sum) || 0) + 1)
    }
     console.log(map)

    return count;
};