/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 先把左右节点换掉了，如果左右是子树的话，递归翻转子树
// var invertTree = function (root) {
//     if(root == null) return null
//     let temp = root.left
//     root.left = root.right
//     root.right = temp
//     if (root.left) {
//         invertTree(root.left)
//     }
//     if (root.right) {
//         invertTree(root.right)
//     }
//     return root
// };

// 分治法，比上面的代码简洁，但是我觉得上面那个也是分治法
var invertTree = function (root) {
    if (root == null) return null
    // 这个比上一个优化的点在于，返回的是新的树，上面的是在原树上翻转的
    return {
        val: root.val,
        left: invertTree(root.right),
        right: invertTree(root.left),
    }
}
