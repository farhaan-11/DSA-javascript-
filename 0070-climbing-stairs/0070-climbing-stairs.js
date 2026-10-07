/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n,map={}) {
    
    if(n==1) return 1
    if(n==2) return 2

    if(map[n]!=undefined) return map[n]

    map[n] = climbStairs(n-1,map) + climbStairs(n-2,map)

    return map[n]
};