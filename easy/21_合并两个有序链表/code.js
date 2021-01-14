// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

// // 72ms
// var mergeTwoLists = function(l1, l2) {
//   // 如果有空链表 返回另一个链表
//   if (!l1) return l2;
//   if (!l2) return l1;

//   let head = (node = new ListNode());
//   head.next = node;

//   // 两个链表都还有节点没遍历到 结束条件不能写成 .next 否则最后一个节点无法参与比较
//   while (l1 && l2) {
//     // 如果l1 小于 l2  l1当前节点接到node后面 l1向后移一位
//     if (l1.val < l2.val) {
//       node.next = l1;
//       l1 = l1.next;
//     } else {
//       node.next = l2;
//       l2 = l2.next;
//     }
//     // node 向后移一位  便于继续拼接下一位
//     node = node.next;
//   }
//   // 如果有链表没遍历完 直接接到最后面
//   if (l1) node.next = l1;
//   if (l2) node.next = l2;
//   return head.next;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    // 这个判断是飞铲需要的，避免后续创建空链表和各种判断
    if (!l1) return l2
    if (!l2) return l1

    // 临时链表
    let head = new ListNode(null)

    // 最终返回结果的链表，因为 head 会不断变化，所以需要 res 记录头节点在哪
    const res = head

    // 两个链表都遍历了一遍，时间复杂度 O(m+n)
    // 因为额外创建的是指针，只指向了某一个地址，所以空间复杂度是 O(1)
    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = l1
            l1 = l1.next
        } else {
            head.next = l2
            l2 = l2.next
        }
        head = head.next
    }
    if (l1) head.next = l1
    if (l2) head.next = l2

    // 由于头节点是自己创建的无意义节点，所以要返回 res.next
    return res.next
}
