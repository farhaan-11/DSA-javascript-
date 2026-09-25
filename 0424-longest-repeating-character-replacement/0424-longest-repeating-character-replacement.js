/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    

    let i=0;
    let j=0;
     let result=0;
     let map=new Map()

     let maxCount=0;

     while(j<s.length){

       if(map.has(s[j])){
        let val=map.get(s[j])
        val++
        map.set(s[j],val)
       }else{
        map.set(s[j],1)
       }
        maxCount=Math.max(...map.values())

        while((j-i+1) - maxCount >k){
            let value=map.get(s[i])
            value--
            map.set(s[i],value)
            i++
            maxCount=Math.max(...map.values())
        }
        

        result=Math.max(result,j-i+1)
        j++
     }

     return result
};