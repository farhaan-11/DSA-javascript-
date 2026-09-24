/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length==0) return 0

    let i=0;
    let j=1
    let max=0;

    while(j<prices.length){

        max=Math.max(prices[j]-prices[i],max)
        if(prices[j]<prices[i]){
            i=j
        }

        j++
    }

    return max
};