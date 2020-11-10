/**
 * 2. 两数相加
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 示例：
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const result = new ListNode();

  let carryOver = 0;
  let nextL1 = l1;
  let nextL2 = l2;
  let cur = result;

  while (nextL1 || nextL2 || carryOver) {
    let v1 = nextL1 ? nextL1.val : 0;
    let v2 = nextL2 ? nextL2.val : 0;
    let sum = v1 + v2 + carryOver;
    carryOver = Math.floor(sum / 10);

    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    if (nextL1) {
      nextL1 = nextL1.next;
    }
    if (nextL2) {
      nextL2 = nextL2.next;
    }
  }

  return result.next;
};

export const printListNode = (l: ListNode): void => {
  if (!l) {
    console.log('nothing input');
  }
  let nextL = l;
  let result = '';
  while (nextL) {
    if (nextL.next) {
      result += `${nextL.val} -> `;
    } else {
      result += `${nextL.val}`;
    }
    nextL = nextL.next;
  }
  console.log(result);
}

export class ListNode {  
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

const l = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
// (2 -> 4 -> 3) + (5 -> 6 -> 4)
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
printListNode(addTwoNumbers(l1, l2));

