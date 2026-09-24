/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length==0) return 0
    if(s.length==1) return 1

    let i=0;
    let j=0;
    let length=0;
    let map=new Map()

     while(j<s.length){

        if(map.has(s[j])){
            length=Math.max(j-i, length)
            let idx=map.get(s[j]) 
            if(idx>=i){
                i=idx + 1
            }
            
        }

        map.set(s[j], j)

        j++
     }
     

     return Math.max(j-i,length)
};