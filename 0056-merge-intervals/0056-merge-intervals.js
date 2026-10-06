/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals=[[1,3],[2,6],[8,10],[15,18]]) {   
    intervals.sort((a,b)=>a[0]-b[0])

    result=[]
    result.push(intervals[0])

    // console.log("result after push",result)

    for(let i=1;  i<intervals.length; i++){

        
        let lastIdx=result.length - 1
        let oldLast= result[lastIdx][1]
        let newstart= intervals[i][0]
        let newLast= intervals[i][1]

        if(newstart<=oldLast){
           result[lastIdx][1]  = Math.max(oldLast,newLast) 
        }else{
            result.push(intervals[i])
        }

        
        // console.log(`result in loop : ${i} : => ${result} `)
    }
    return result;
};