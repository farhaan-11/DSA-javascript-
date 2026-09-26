/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

 function checkMap(map1,map2){
    if(map1.size!=map2.size) return false

    for(let [key,value] of map1){
        if(value!=map2.get(key)){
            return false
        }
    }

    return true
 }

var checkInclusion = function(s1, s2) {
    
    let map1=new Map()
    for(let i=0; i<s1.length; i++){
        if(map1.has(s1[i])){
            let val=map1.get(s1[i])
            val++
            map1.set(s1[i],val)
        }else{
            map1.set(s1[i],1)
        }
    }

    let map2=new Map()
    let i=0;
    let j=0;

    while(j<s2.length){

        if(map2.has(s2[j])){
            let val=map2.get(s2[j])
            val++
            map2.set(s2[j],val)

        }else{
            map2.set(s2[j],1)
        }

        if(j-i+1 > s1.length){
            let val=map2.get(s2[i])
            val--
            if(val==0) {
                map2.delete(s2[i])
            }else{
                map2.set(s2[i],val)
            }
            
            i++
        }

        if(j-i+1==s1.length){
            let result=checkMap(map1,map2)
            if(result) return true
        }
        j++
    }
return false
};