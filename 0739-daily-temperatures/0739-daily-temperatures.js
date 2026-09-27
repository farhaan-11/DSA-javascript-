/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let result=new Array(temp.length).fill(0)
    let stack=[]
    let i=0;

    while(i<temp.length){

        while(stack.length>0 && temp[i] > temp[stack[stack.length-1]]){

            let idx= stack[stack.length -1]

            result[idx]= i- idx

            stack.pop()
        }
       

        stack.push(i)
         i++
    }
    return result
};