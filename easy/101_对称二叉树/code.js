/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function (root) {
    // 如果节点不存在，是对称的
    if (!root) return true

    const isMirror = (r1, r2) => {
        if (!r1 && !r2) return true
        return !!(
            r1 &&
            r2 &&
            r1.val === r2.val &&
            isMirror(r1.left, r2.right) &&
            isMirror(r1.right, r2.left)
        )
    }

    return isMirror(root.left, root.right)
}
