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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(root==null) return []

    let result=[]
    let i=0;
    let q=[root]
    while(i<q.length){
        let j=q.length;

        while(i<j){
            let node = q[i]

            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
            i++
        }
        result.push(q[i-1].val)
    }
    // result.push(q[i-1].val)
    return  result
};