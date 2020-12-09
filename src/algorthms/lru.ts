class Node {
  pre: Node;
  next: Node ;
  data: Object;

  constructor(data: object) {
    this.pre = null;
    this.next = null;
    this.data = data;
  }
}

class NodeList {
  private head: Node | null;

  constructor(head: Node) {
    this.head = head;
  }

  put(n: Node) {
    if (this.head) {
      n.next = this.head;
      n.next.pre = n;
      this.head = n;
    } else {
      this.head = n;
    }
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  del(n: Node) {
    const node = this.head;
    if (!node) { // 链表为空
      return;
    }
    while(node.next) {
      if (node.data === n.data) {
        break;
      }
      node === node.next;
    }
    if (node.pre) {
      node.pre.next = node.next;
    } else {
      // 删除的是头结点
      // node.next.pre = null;
      this.head = node.next;
    }

    if (node.next) {
      node.next.pre = node.pre;
    } else {
      // 删除的是尾结点
      node.pre?.next
    }
  }
}
/**
 * 基于LRU 算法的缓存
 */
export class LRUCache {
  /**
   * 当前容量
   */
  private cap: number;

  /**
   * 最大容量
   */
  private maxCap: number;

  private cache: Map<string, Object>;
  private list: IListNode[];

  constructor(maxCap: number) {
    this.maxCap = maxCap;
    this.cap = 0;
    this.cache = new Map<string, Object>();
    this.list = [];
  }

  public add(key: string, obj: Object) {
    if (this.cap < this.maxCap) {
      this.cache.set(key, obj);
    }
  }

  public get(key: string) {
    // move key to front
    return this.cache.get(key);
  }
}