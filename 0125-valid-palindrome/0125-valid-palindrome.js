/**
 * @param {string} s
 * @return {boolean}
 */


    function isAlphaNumeric(char) {
  return /[a-z0-9]/i.test(char);
}

var isPalindrome = function(s = ':aa/') {
    

let str=isAlphaNumeric(s)
let finalString;
if(str){
   finalString= s.toLowerCase().replace(/[^a-z0-9]/g, '')
}
console.log('str',str)

console.log('finalString',finalString)
if(finalString=='') return true
let i=0;
let j= finalString?.length -1

    while(i<=j){
        
        if(finalString[i]!=finalString[j]) {
            
            return false
        }
        i++
        j--
    }
    return true
};

console.log(isPalindrome())
