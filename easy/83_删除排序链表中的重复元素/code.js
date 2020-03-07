/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 68ms
var deleteDuplicates = function(head) {
  if (!head) return head;
  // 记住链表头 否则单链往后移之后就回不来了
  let node = head;
  // 记录节点都值 用于判断重复
  let value = head.val;
  // 当前节点存在且下个节点存在 判断当前节点值与下个节点值是否相同
  while (head && head.next) {
    if (head.next.val === value) {
      // 值相同 删除下一个节点
      head.next = head.next.next;
    } else {
      // 不相同时才向后移一位 相同时在删除节点 也是向后移
      head = head.next;
      // 如果向后移之后不是尾节点 值记录一下
      value = head && head.val;
    }
  }
  return node;
};
