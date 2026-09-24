/**
 * @param {string} s
 * @return {boolean}
 */



var isPalindrome = function(s = '.....') {
    console.log('string length',s.length)
    
// const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let i = 0;
    let j = s.length - 1;

    while (i < j) {
      
        while (i<j && !((s[i].toLowerCase().charCodeAt(0) >= 97 && s[i].toLowerCase().charCodeAt(0) <= 122) || (s[i].toLowerCase().charCodeAt(0) >= 48 && s[i].toLowerCase().charCodeAt(0) <= 57))) {
    // neither lowercase letter nor number
    i++
}

  while (j>i && !((s[j].toLowerCase().charCodeAt(0) >= 97 && s[j].toLowerCase().charCodeAt(0) <= 122) || (s[j].toLowerCase().charCodeAt(0) >= 48 && s[j].toLowerCase().charCodeAt(0) <= 57))) {
    // neither lowercase letter nor number
    j--
}
if(j>i && s[i].toLowerCase()!==s[j].toLowerCase()) return false

        i++;
        j--;
    }

    return true;
};

console.log(isPalindrome())
