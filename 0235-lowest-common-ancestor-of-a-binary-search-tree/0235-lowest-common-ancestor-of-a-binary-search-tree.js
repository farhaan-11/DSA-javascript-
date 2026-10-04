/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (node, p, q) {
    // if (p.val < node.val && q.val < node.val) {
    //     return lowestCommonAncestor(node.left,p,q)
    // }
    // else if (p.val > node.val && q.val > node.val){
    //      return lowestCommonAncestor(node.right,p,q)
    // }
    // else{
    //      return node;
    // }

    while (node) {
  if (p.val < node.val && q.val < node.val) node = node.left;
  else if (p.val > node.val && q.val > node.val) node = node.right;
  else return node;
}
};