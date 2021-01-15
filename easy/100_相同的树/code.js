/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 循环中序遍历两棵树 对比循环结果
// 宣告失败  若每个节点的值都一样 中序结果也无法判断是左子树还是右子树
// var isSameTree = function(p, q) {
//     // 遍历两棵树，将遍历出来的值拼成字符串
//     // 每个节点后面加一个特殊标记 '-'，避免出现 1 23 等于 12 3
//     let pStr = ``
//     let qStr = ``
//     let pList = []
//     let qList = []
//     while(p || pList.length) {
//         while(p) {
//             pList.push(p)
//             p = p.left
//         }
//         if(pList.length) {
//             p = pList.pop()
//             pStr = `${pStr}-${p.val}` // 中序
//             p = p.right
//         }

//     }
//     while(q || qList.length) {
//         while(q) {
//             qList.push(q)
//             q = q.left
//         }
//         if(qList.length) {
//             q = qList.pop()
//             qStr = `${qStr}-${q.val}` // 中序
//             q = q.right
//         }

//     }
//     return pStr === qStr
// };

// 64ms
var isSameTree = function (p, q) {
    // 一个节点有值 另一个是空节点 不相等
    if ((p && !q) || (q && !p)) return false
    // 都是空节点 相等
    if (!p && !q) return true
    // 遍历判断左右子树是否相等 若值相等且左右子树相等 才说明两棵树相等

    // 不需要加个if嵌套
    // if(p && q) {
    return (
        p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)
    )
    // }
}

// 128ms 两棵树同步遍历 判断是否相等
// var isSameTree = function(p, q) {
//     let pList = []
//     let qList = []
//     while(p || pList.length) {
//         // p是null q还有
//         if(!p && q) return false
//         while(p) {
//             // p还有 q没了
//             if(!q) return false
//             // 左节点入栈
//             pList.push(p)
//             console.log(pList)
//             p = p.left
//             q && qList.push(q)
//             q = q.left

//         }
//         // p左子树遍历完了 q有左子树没遍历到
//         if(q) return false
//         if(pList.length) {
//             if(!qList.length) return false
//             p = pList.pop()
//             q = qList.pop()
//             // 比较节点值是否相等
//             if(p.val !== q.val) return false
//             // 如果相等就比较右子树
//             p = p.right
//             q = q.right
//         }
//     }
//     // p已经全部遍历结束 q还有没被遍历到的节点
//     if(q) return false
//     // 两棵树都完全遍历了 且没有遇到不等情况  最终返回true
//     if(!p && !q) return true
// }

// var isSameTree = function (p, q) {
//     // 两个节点都不存在，true - 相同
//     if (!p && !q) return true

//     // 一个存在一个不存在或两个值不同，false - 不相同
//     if ((p && !q) || (q && !p) || p.val !== q.val) return false

//     // 继续比较左右子树是否相同，左右子树都是相同的树时 true - 相同
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// };

var isSameTree = function (p, q) {
    if (!p && !q) return true

    // 如果节点值相同，且左右子树相同，说明是相同的
    if (
        p &&
        q &&
        p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)
    )
        return true

    return false
}
