/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function twoSum(nums,left,right,target,result){

    while(left<right ){
        let sum=nums[left] + nums[right]

        if(sum===target){
            result.push([-target,nums[left],nums[right]])
            
            while(left<right  && nums[left+1]== nums[left]) left++
            while(right>left  && nums[right-1]== nums[right]) right--
            left++
            right--
        } else if(sum>target){
            right--
        }else{
            left++
        }
    }
}


var threeSum = function(arr) {
     let result=[]

    arr.sort((a,b)=>a-b)
    console.log('arr',arr)

    for(let i=0; i<arr.length; i++){

       if (i > 0 && arr[i-1] === arr[i]) continue

        let fix= arr[i]
        let target= - fix

        twoSum(arr, i+1, arr.length-1, target, result)    



    }

    return result
};