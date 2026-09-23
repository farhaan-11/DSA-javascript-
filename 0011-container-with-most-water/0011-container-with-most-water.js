/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    
    let max=0;
    let i=0;
    let j=heights.length-1

    while(i<j){

        let width= j-i
        let height= Math.min(heights[i],heights[j])
        max=Math.max((width*height),max)

        if(heights[i]>=heights[j]){
            j--
        }else{
            i++
        }
    }

    return max
};