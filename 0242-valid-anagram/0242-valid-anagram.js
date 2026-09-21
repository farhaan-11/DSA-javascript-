/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let map=new Map()

    // create a map ----

    for(let i=0; i<s.length; i++){

        map.set(s[i],(map.get(s[i])||0) + 1)
    }
    console.log('map',map)
    //  check ---
    for(let i=0; i<t.length; i++){
        if(!map.has(t[i])){
            return false
        }
        let value=map.get(t[i])
        value--
        if(value<0) return false
        map.set(t[i],value)
    }

    for(let [key, value] of map){
        if (value>0) return false
    }
    return true
};