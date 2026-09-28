/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 
 */
function searchB(arr,i, j,target){
    while(i<=j){
        let mid= Math.floor(i + ( j-i)/2)

        if(arr[mid]==target) return mid
        else if(arr[mid] <  target){
            i= mid+1
        }else{
            j=mid -1 
        }
    }

    return -1
}


var search = function(nums, target) {
    let left=0;
    let right = nums.length -1

    if(nums[left]<nums[right]){
       return searchB(nums,left,right,target)

    
    }
    //  find pivot---
    while(left<right){
        let mid= Math.floor( left + (right - left)/2)

        if(nums[mid]> nums[right]){
            left= mid+1
        }else{
            right=mid
        }
    }

    let result;
result=searchB(nums,0,left -1,target)
if(result !=-1){
    return result
}

result=searchB(nums,left,nums.length -1,target)
if(result !=-1){
    return result
}

return -1 

};