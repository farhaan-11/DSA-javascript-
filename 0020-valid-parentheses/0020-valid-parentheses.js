/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
     let stack=[]

    for(let i=0; i<str.length; i++){

        let top;
        if(str[i]==")"){
            top=stack[stack.length-1]
            if(top=="("){
                stack.pop()
            }else{
                stack.push(str[i])
            }

        }else if(str[i]=="}"){
             top=stack[stack.length-1]
            if(top=="{"){
                stack.pop()
            }else{
                stack.push(str[i])
            }
            
        }else if(str[i]=="]"){
             top=stack[stack.length-1]
            if(top=="["){
                stack.pop()
            }else{
                stack.push(str[i])
            }

        }else{
            stack.push(str[i])
        }
    }

    return stack.length==0 
};