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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {

  let diameter=0;

  function cal(node){
    if(node==null) return 0;

    let left = cal(node.left)
    let right = cal(node.right)

    diameter = Math.max((left + right +1),diameter)

    return Math.max(left,right) +1
  }
  cal(root)

  return diameter  - 1

};