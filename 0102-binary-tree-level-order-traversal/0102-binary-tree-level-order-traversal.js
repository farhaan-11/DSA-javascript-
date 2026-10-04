/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root==null) return []

    let q=[root]

    let i=0;

    let result=[]

    while(i<q.length){
        let j= q.length;
        let temp=[]
        while(i<j){
            let el=q[i]
            temp.push(el.val)
            if(el.left) q.push(el.left)
            if(el.right) q.push(el.right)
            i++
        }
        result.push(temp)
    }

    return result
};