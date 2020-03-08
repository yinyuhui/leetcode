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

// 72ms
var mergeTwoLists = function(l1, l2) {
  // 如果有空链表 返回另一个链表
  if (!l1) return l2;
  if (!l2) return l1;

  let head = (node = new ListNode());
  head.next = node;

  // 两个链表都还有节点没遍历到 结束条件不能写成 .next 否则最后一个节点无法参与比较
  while (l1 && l2) {
    // 如果l1 小于 l2  l1当前节点接到node后面 l1向后移一位
    if (l1.val < l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    // node 向后移一位  便于继续拼接下一位
    node = node.next;
  }
  // 如果有链表没遍历完 直接接到最后面
  if (l1) node.next = l1;
  if (l2) node.next = l2;
  return head.next;
};
